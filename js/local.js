console.log("Local");

// REMOVE ***CURRENT NOTES***
localStorage.removeItem("currentNotes");

// ALEART ***FLAGS***
let alertCount1 = false;
let successfullCount1 = false;

// ***VARIABLES***
let addBtn = document.getElementById("addBtn");
let addTitle = document.getElementById("addTitle");
let addtxt = document.getElementById("addtxt");
let notesCardContainer = document.getElementById("notesCardContainer");
let alertWarning = document.getElementById("alert-warning");

// WINDOW ***ONLOAD** CALLING
window.onload = function () {
  setTimeout(() => {
    showNotes();
  }, 100);
};

// ***OFFLINE*** ALEART NOTIFICATION ***FUNCTION COLLING***
window.addEventListener("scroll", () => {
  if (alertCount1 == true) {
    setTimeout(() => {
      alertCalling();
    }, 1000);
    setTimeout(() => {
      alertCount1 = false;
    }, 2000);
  }
});

// ***ONLINE*** ALEART NOTIFICATION ***FUNCTION COLLING***
window.addEventListener("scroll", () => {
  if (successfullCount1 == true) {
    setTimeout(() => {
      successCalling();
    }, 1000);
    setTimeout(() => {
      successfullCount1 = false;
    }, 2000);
  }
});

// SET TO LOCAL STORAGE
function addNotes() {
  // TIME AND DATE
  let time = new Date().toISOString();
  //   CHECK LOCAK STORAGE
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  if (addTitlePost.value.length > 0 || addtxtPost.value.length > 0) {
    myObj = {
      addTitle: addTitle.value,
      addtxt: addtxtPost.value,
      addTime: time,
    };
    console.log("Validation work");
    console.log(myObj);
    notesObj.push(myObj);
  }

  localStorage.setItem("notes", JSON.stringify(notesObj));
  console.log(notesObj);

  setTimeout(() => {
    addTitle.value = "";
    addtxt.value = "";
  }, 100);
}

// GET LOCAL STORAGE
function showNotes() {
  //   CHECK LOCAK STORAGE
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    alertCount1 = true;
  }
  let domHtml = "";
  notesObj.forEach((element, index) => {
    // console.log(element);
    let data = new Date(element.addTime).toLocaleDateString();
    let time = new Date(element.addTime).toLocaleTimeString();
    domHtml += `<div
    class="notes-card notes-card${Math.floor(
      Math.random() * 6 + 1
    )} col-lg-3 col-md-4 col-9 my-4 mx-3 py-md-5 py-3 px-md-4 p-2 rounded-4"
    >
    <div class="card-title" id="">
    <h3>Local :- ${element.addTitle}</h3>
    </div>
    <div class="card-body">
    <p>${element.addtxt}</p>
    <div class="note-time d-flex justify-content-around">
        <span class="date">${data}</span>
        <span class="time">${time}</span>
    </div>
    </div>
    <button id="${
      element.addKey
    }" onclick="deleteNotes(this,${index})" class="btn-delete btn btn-brand mt-3">Delete Note</button>
</div>`;
  });

  if (notesObj != 0) {
    notesCardContainer.innerHTML = domHtml;
    console.log("ShowNotes");
  } else {
    alertCount1 = false;
    // notesCardContainer.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// ADD CURRENT NOTES TO ***LOCAL STORAGE***
function currentNotes() {
  // TIME AND DATE
  let time = new Date().toISOString();

  //   CHECK LOCAK STORAGE
  let notes = localStorage.getItem("currentNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  if (addTitle.value.length > 0 || addtxt.value.length > 0) {
    let myObj = {
      addTitle: addTitle.value,
      addtxt: addtxt.value,
      addTime: time,
    };
    console.log("Current Notes");
    console.log(myObj);
    notesObj.push(myObj);
  }

  localStorage.setItem("currentNotes", JSON.stringify(notesObj));
  console.log(notesObj);

  setTimeout(() => {
    addTitle.value = "";
    addtxt.value = "";
  }, 100);
}
// SHOW CURRENT NOTES TO ***DOM***
function currentNotesShow() {
  //   CHECK LOCAK STORAGE
  let notes = localStorage.getItem("currentNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let domHtml = "";
  notesObj.forEach((element, index) => {
    // console.log(element);
    let date = new Date(element.addTime).toLocaleDateString();
    let time = new Date(element.addTime).toLocaleTimeString();
    domHtml = `<div
    class="notes-card notes-card${Math.floor(
      Math.random() * 6 + 1
    )} col-lg-3 col-md-4 col-9 my-4 mx-3 py-md-5 py-3 px-md-4 p-2 rounded-4"
    >
    <div class="card-title" id="">
    <h3>Current :- ${element.addTitle}</h3>
    </div>
    <div class="card-body">
    <p>${element.addtxt}</p>
    <div class="note-time d-flex justify-content-around">
        <span class="date">${date}</span>
        <span class="time">${time}</span>
    </div>
    </div>
   <button id="" onclick="deleteNotes(this,${index})" class="btn-delete btn btn-brand mt-3">Delete Note</button>
</div>`;
  });

  if (notesObj != 0) {
    notesCardContainer.innerHTML += domHtml;
    setTimeout(() => {}, 200);
  }
}

// CALLING THE NOTES
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addNotes();
  // showNotes();
  currentNotes();
  currentNotesShow();
});

addtxt.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addNotes();
    // showNotes();
    currentNotes();
    currentNotesShow();
  }
});

// ***ALEART*** MESSAGE DOM SET-UP
function alertMessage() {
  let message = `<div class="alert alert-warning alert-dismissible fade show py-2" role="alert">
               <h5 class="d-inline-flex justify-content-center align-items-center"><span class="icon-box me-2"><i class="ri-cloud-off-fill"></i></span><strong>Sorry !</strong> You are now offline.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`;
  // console.log(alertWarning);
  alertWarning.innerHTML = message;

  setTimeout(() => {
    alertWarning.innerHTML = "";
  }, 6000);
}

// ALEART ***CALLING & HANDLING***
function alertCalling() {
  let screenPosition = window.innerHeight;
  let alertWarningPosition = alertWarning.getBoundingClientRect().top;
  // console.log(alertWarningPosition);
  // console.log(screenPosition);
  if (screenPosition >= alertWarningPosition) {
    alertMessage();
  }
}

// ***SUCCESS*** MESSAGE DOM SET-UP
function successMessage() {
  let message = `<div class="alert alert-successfull alert-dismissible fade show py-2" role="alert">
               <h5 class="d-inline-flex justify-content-center align-items-center"><span class="icon-box me-2"><i class="ri-cloud-fill"></i></span><strong>Sucessfull !</strong> Your notes data has been featching successfully.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`;
  // console.log(alertWarning);
  alertWarning.innerHTML = message;

  setTimeout(() => {
    alertWarning.innerHTML = "";
  }, 6000);
}

// SUCCESS ***CALLING $ HANDLING***
function successCalling() {
  let screenPosition = window.innerHeight;
  let alertWarningPosition = alertWarning.getBoundingClientRect().top;
  // console.log(alertWarningPosition);
  // console.log(screenPosition);
  if (screenPosition >= alertWarningPosition) {
    successMessage();
  }
}

// FEATCHING NOTES FROM SERVER
// ***FETCH FUNCTION***
async function fetchNotes(url) {
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    alertCount1 = false;
    successfullCount1 = true;
    return data;
  } else {
    throw new Error("Bad response");
    alert("offline");
    // showNotes();
    // alertMessage();
    alertCount1 = true;
  }
}

// MAKE REQUEST:
(async function makeRequest() {
  const theData = await fetchNotes(
    "https://1ud4og.deta.dev/form/get-all?type=note-app-resume"
  );

  // console.log(theData);
  let domHtml = "";
  const sl = theData.data.sort((a, b) => {
    a1 = new Date(a.data.addTime);
    b1 = new Date(b.data.addTime);
    return a1.getTime() - b1.getTime();
  });
  sl.reverse().forEach((e, index) => {
    let addTime = e?.data?.addTime;
    let addTitle = e?.data?.addTitle;
    let addtxt = e?.data?.addtxt;
    let key = e?.key;
    // console.log(key);
    let date = new Date(addTime).toLocaleDateString();
    let time = new Date(addTime).toLocaleTimeString();

    domHtml += `<div
    class="notes-card notes-card${Math.floor(
      Math.random() * 6 + 1
    )}  col-lg-3 col-md-4 col-9 my-4 mx-3 py-md-5 py-3 px-md-4 p-2 rounded-4"
  >
    <div class="card-title" id="">
      <h3>Server :- ${addTitle}</h3>
    </div>
    <div class="card-body">
      <p>${addtxt}</p>
      <div class="note-time d-flex justify-content-around">
        <span class="date">${date}</span>
        <span class="time">${time}</span>
      </div>
    </div>
    <button id="${key}" onclick="deleteNotes(this,${index})" class="btn-delete btn btn-brand mt-3">Delete Note</button>
  </div>`;

    // UPDATE  LOCAL STORAGE
    localStorage.removeItem("notes");
    theData.data.forEach((e) => {
      let addTime = e?.data?.addTime;
      let addTitle = e?.data?.addTitle;
      let addtxt = e?.data?.addtxt;
      let key = e?.key;

      let myObj = {
        addTitle: addTitle,
        addtxt: addtxt,
        addTime: addTime,
        addKey: key,
      };
      // console.log(myObj);

      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      notesObj.push(myObj);
      localStorage.setItem("notes", JSON.stringify(notesObj));
    });
    // console.log(localStorage.getItem("notes"));
  });

  let fetchNotesSize = theData.data.length;
  // console.log(fetchNotesSize);
  if (fetchNotesSize === 0) {
    successfullCount1 = false;
  }
  notesCardContainer.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes Fetch.`;
  notesCardContainer.innerHTML = domHtml;
})();
