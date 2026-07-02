import { db }
from "./firebase.js";

import {
collection,
getDocs
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


async function loadFeedback(){

const feedbackList=
document.getElementById(
"feedbackList"
);

feedbackList.innerHTML="";

const snapshot=
await getDocs(
collection(db,"feedback")
);

snapshot.forEach((doc)=>{

const data=
doc.data();

feedbackList.innerHTML+=`

<div class="item">

<p>
<b>Name:</b>
${data.name}
</p>

<p>
<b>Email:</b>
${data.email}
</p>

<p>
<b>Rating:</b>
${data.rating}
</p>

<p>
<b>Feedback:</b>
${data.message}
</p>

</div>

`;

});

}


async function loadContacts(){

const contactList=
document.getElementById(
"contactList"
);

contactList.innerHTML="";

const snapshot=
await getDocs(
collection(db,"contacts")
);

snapshot.forEach((doc)=>{

const data=
doc.data();

contactList.innerHTML+=`

<div class="item">

<p>
<b>Name:</b>
${data.name}
</p>

<p>
<b>Email:</b>
${data.email}
</p>

<p>
<b>Subject:</b>
${data.subject}
</p>

<p>
<b>Message:</b>
${data.message}
</p>

</div>

`;

});

}

loadFeedback();
loadContacts();