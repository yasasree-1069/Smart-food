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
"volunteerContainer"
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

if(data.status==="Accepted"){

container.innerHTML += `

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
${data.foodType || "Not specified"}
</p>

<p>
Status:
${data.status}
</p>

<button
class="actionBtn"
onclick="deliverDonation('${donation.id}')">

Mark Delivered 🚚

</button>

</div>

`;

}

});

}


window.deliverDonation=
async(id)=>{

await updateDoc(

doc(
db,
"donations",
id
),

{

status:"Delivered"

}

);

alert(
"Food Delivered Successfully"
);

loadDonations();

};

loadDonations();