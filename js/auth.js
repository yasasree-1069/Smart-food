import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
doc,
setDoc,
getDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


// ================= REGISTER =================

document.getElementById("registerBtn")
.addEventListener("click", async ()=>{

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let password =
document.getElementById("password").value.trim();

let confirmPassword =
document.getElementById("confirmPassword").value.trim();

let role =
document.getElementById("role").value;


if(name===""){
alert("Enter Name");
return;
}

if(email===""){
alert("Enter Email");
return;
}

if(password===""){
alert("Enter Password");
return;
}

if(password!==confirmPassword){
alert("Passwords do not match");
return;
}

if(role===""){
alert("Select Role");
return;
}


try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);


await setDoc(
doc(
db,
"users",
userCredential.user.uid
),
{

name:name,
email:email,

// store role in lowercase
role:role.toLowerCase()

}

);

alert("Registration Successful");

showLogin();

}
catch(error){

alert(error.message);

}

});



// ================= LOGIN =================

document.getElementById("loginBtn")
.addEventListener("click", async()=>{

let email =
document.getElementById("loginEmail").value.trim();

let password =
document.getElementById("loginPassword").value.trim();

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);


const userDoc =
await getDoc(
doc(
db,
"users",
userCredential.user.uid
)
);

const userData =
userDoc.data();


if(userData.role==="donor"){

window.location.href=
"donor_dashboard.html";

}

else if(userData.role==="ngo"){

window.location.href=
"ngo_dashboard.html";

}

else if(userData.role==="volunteer"){

window.location.href=
"volunteer_dashboard.html";

}

else if(userData.role==="admin"){

window.location.href=
"admin_dashboard.html";

}

else{

alert("Role not found");

}

}
catch(error){

alert(error.message);

}

});