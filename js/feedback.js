import { db }
from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


document.getElementById(
"submitFeedback"
)
.addEventListener(
"click",
async()=>{

let name=
document.getElementById(
"name"
).value;

let email=
document.getElementById(
"email"
).value;

let rating=
document.getElementById(
"rating"
).value;

let message=
document.getElementById(
"message"
).value;


if(
name=="" ||
email=="" ||
rating=="" ||
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
"feedback"
),

{

name:name,
email:email,
rating:rating,
message:message,
date:new Date().toLocaleString()

}

);

alert(
"Feedback Submitted Successfully"
);

window.location.href=
"thank_you.html";

}
catch(error){

alert(error.message);

}

});