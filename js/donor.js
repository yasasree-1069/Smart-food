import { db, auth }
from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

document.getElementById("donateBtn")
.addEventListener(
"click",
async()=>{

let foodName=
document.getElementById("foodName").value.trim();

let quantity=
document.getElementById("quantity").value.trim();

let location=
document.getElementById("location").value.trim();

let expiry=
document.getElementById("expiry").value;

let foodType=
document.getElementById("foodType").value;


if(
foodName=="" ||
quantity=="" ||
location==""
){

alert("Please fill all fields");

return;

}

try{

await addDoc(

collection(
db,
"donations"
),

{

foodName:foodName,
quantity:quantity,
location:location,
expiry:expiry,
foodType:foodType,
donorId:auth.currentUser.uid,
status:"Pending"

}

);

alert(
"Donation Submitted Successfully!"
);

window.location.href=
"accepted_donation.html";

}
catch(error){

alert(error.message);

}

});