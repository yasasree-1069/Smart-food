import { db }
from "./firebase.js";

import {
collection,
getDocs,
doc,
updateDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


const container=
document.getElementById(
"donationContainer"
);


async function loadDonations(){

const snapshot=
await getDocs(
collection(
db,
"donations"
)
);

container.innerHTML="";


snapshot.forEach((donation)=>{

const data=
donation.data();

if(data.status==="Pending"){

container.innerHTML +=`

<div class="item">

<p>
<b>${data.foodName}</b>
</p>

<p>
Quantity:
${data.quantity}
</p>

<p>
Location:
${data.location}
</p>

<p>
Food Type:
${data.foodType}
</p>

<p>
Expiry:
${data.expiry}
</p>

<button
class="acceptBtn"
onclick="acceptDonation('${donation.id}')">

Accept Donation

</button>

</div>

`;

}

});

}

window.acceptDonation=
async(id)=>{

await updateDoc(
doc(
db,
"donations",
id
),
{
status:"Accepted"
}
);

alert(
"Donation Accepted Successfully"
);

loadDonations();

};

loadDonations();