let addBtnPost = document.getElementById("addBtn");
let addTitlePost = document.getElementById("addTitle");
let addtxtPost = document.getElementById("addtxt");
let notesCardContainerPost = document.getElementById("notesCardContainer");
showNotes();
function notesForPost() {
  let notes = localStorage.getItem("notesForPost");
  if (notes == null) {
    notObj = [];
  } else {
    notObj = JSON.parse(notes);
  }

  // TIME AND DATE
  let time = new Date().toISOString();
  let forDeleteDate = new Date().toLocaleDateString();
  let forDeleteTime = new Date().toLocaleTimeString();
  let creatDeleteData = forDeleteDate + forDeleteTime;

  let myObj = "";
  if (addTitlePost.value.length > 0 || addtxtPost.value.length > 0) {
    myObj = {
      addTitle: addTitlePost.value,
      addtxt: addtxtPost.value,
      addTime: time,
      addDelete: creatDeleteData,
    };
    console.log("Validation work");
    console.log(myObj);
    notObj.push(myObj);
  }

  localStorage.setItem("notesForPost", JSON.stringify(notObj));
  console.log(`notesForPost`, notObj);
}

addBtn.addEventListener("click", () => {
  notesForPost();
});

addtxtPost.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    notesForPost();
  }
});

// POST REQUEST
setInterval(() => {
  let notes = localStorage.getItem("notesForPost");
  if (notes == null) {
    notObj = [];
  } else {
    notObj = JSON.parse(notes);
    notObj.forEach((element) => {
      let data = {
        addTitle: element.addTitle,
        addtxt: element.addtxt,
        addTime: element.addTime,
      };

      const url = `https://1ud4og.deta.dev/form`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ type: "note-app-resume", data }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        mode: "cors",
      })
        .then((response) => response.text())
        .then((text) => {
          localStorage.removeItem("notesForPost");
          console.log(text);
        });
    });
  }
}, 3000);
