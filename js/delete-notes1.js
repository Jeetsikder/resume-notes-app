// fetchDelete();
function deleteNotes(e, index) {
  let elId = e.id;

  // SAVE ID TO LOCAL STORAGE FOR  ***SERVER DELETE METHOD***
  let elementId = localStorage.getItem("elementId");
  if (elementId == null) {
    idObj = [];
  } else {
    idObj = JSON.parse(elementId);
  }
  let myobj = {
    key: elId,
  };
  idObj.push(myobj);
  localStorage.setItem("elementId", JSON.stringify(idObj));

  // fetchDelete();
  // localStorageDelete(e);
  currentNotesDelete(e);
  // deleteCurrent(e);
  setTimeout(() => {
    // e.parentElement.classList.add("d-none");
  }, 1000);
}

//  NOTES ***DELETE FROM  SERVER***
function fetchDelete() {
  let elementId = localStorage.getItem("elementId");
  if (elementId == null) {
    idObj = [];
  } else {
    idObj = JSON.parse(elementId);
  }
  idObj.forEach((element) => {
    setTimeout(() => {
      let url = `https://1ud4og.deta.dev/form/delete/${element.key}?type=note-app-resume`;
      console.log(element.key);
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        mode: "cors",
      })
        .then((response) => response.text())
        .then((text) => {
          console.log(text);
          localStorage.removeItem("elementId");
        });
    });
  }, 100);
}

//  NOTES **DELETE FROM OFFLINE LOCAL STORAGE***
function localStorageDelete(e) {
  // console.log(e.parentElement);
  let notesObj;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // let element = e.parentElement;
  const fg = notesObj.filter((element) => element["addKey"] !== e.id);
  console.log(fg);
  localStorage.setItem("notes", JSON.stringify(fg));
}

//  NOTES ***DELETE FROM CURRENT LOCAL STORAGE*** [***UNDER-DEVELOPMENT***]
function currentNotesDelete(e) {
  let verifiDate =
    e.parentElement.childNodes[3].childNodes[3].childNodes[1].innerText;
  let verifiTime =
    e.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText;
  console.log(verifiDate, verifiTime);
  let newDate = new Date(`${verifiDate} ${verifiTime}`).toISOString();
  // date = date.split(".", 1);
  newDate = newDate.split(".", 1);
  console.log(`Date :- ${newDate}`);

  // GRABING ***CURRENT NOTES LOCAL STORAGE***
  let notObj;
  let notes = localStorage.getItem("notesForPost");
  if (notes == null) {
    notObj = [];
  } else {
    notObj = JSON.parse(notes);
  }
  let fg = notObj.filter(
    (element) => element["addTime"].split(".", 1) !== newDate
  );
  console.log(fg);
  // localStorage.setItem("notesForPost", JSON.stringify(fg));
}

// NOTES ***DELETE FROM CURRENT LOCAL STORAGE*** [***WORKING-CONDITION**]
function deleteCurrent(e) {
  let verifiDate =
    e.parentElement.childNodes[3].childNodes[3].childNodes[1].innerText;
  let verifiTime =
    e.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText;
  let dataReady = verifiDate + verifiTime;
  console.log(dataReady);

  // GRABE ***CURRENT LOCAL STORAGE***
  let notObj;
  let notes = localStorage.getItem("notesForPost");
  if (notes == null) {
    notObj = [];
  } else {
    notObj = JSON.parse(notes);
  }
  let fg = notObj.filter((element) => element["addDelete"] !== dataReady);
  console.log(fg);
  localStorage.setItem("notesForPost", JSON.stringify(fg));
}
