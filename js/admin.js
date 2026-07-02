import { db }
from "./firebase.js";

import {
collection,
getDocs
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


async function loadDashboardData(){

try{

// Users
const usersSnapshot=
await getDocs(
collection(db,"users")
);

document.getElementById(
"usersCount"
).innerText=
usersSnapshot.size;


// Donations
const donationSnapshot=
await getDocs(
collection(db,"donations")
);

document.getElementById(
"donationsCount"
).innerText=
donationSnapshot.size;


// Accepted Donations
const acceptedSnapshot=
await getDocs(
collection(db,"accepted_donations")
);

document.getElementById(
"acceptedCount"
).innerText=
acceptedSnapshot.size;


// Delivered Donations
const deliveredSnapshot=
await getDocs(
collection(db,"delivered_donations")
);

document.getElementById(
"deliveredCount"
).innerText=
deliveredSnapshot.size;

}
catch(error){

console.log(error);

}

}

loadDashboardData();