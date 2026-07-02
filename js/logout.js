import { auth }
from "./firebase.js";

import {
signOut
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


window.logoutUser=
async function(){

try{

await signOut(auth);

alert(
"Logged out successfully"
);

window.location.href=
"login_register.html";

}
catch(error){

alert(
error.message
);

}

}