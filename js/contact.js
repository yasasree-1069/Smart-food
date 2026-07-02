import { db }
from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


document.getElementById(
"sendBtn"
)
.addEventListener(
"click",
async()=>{

let name=
document.getElementById(
"contactName"
).value;

let email=
document.getElementById(
"contactEmail"
).value;

let subject=
document.getElementById(
"subject"
).value;

let message=
document.getElementById(
"contactMessage"
).value;


if(
name=="" ||
email=="" ||
subject=="" ||
message==""
){

alert(
"Please fill all fields"
);

return;

}

try{

await addDoc(

collection(
db,
"contacts"
),

{

name:name,
email:email,
subject:subject,
message:message,
date:new Date().toLocaleString()

}

);

alert(
"Message Sent Successfully"
);


document.getElementById("contactName").value="";
document.getElementById("contactEmail").value="";
document.getElementById("subject").value="";
document.getElementById("contactMessage").value="";

}
catch(error){

alert(error.message);

}

});