let addBtnPost = document.getElementById("addBtn");
let addTitlePost = document.getElementById("addTitle");
let addtxtPost = document.getElementById("addtxt");
let notesCardContainerPost = document.getElementById("notesCardContainer");
setTimeout(() => {
  showNotes();
}, 2000);

setInterval(() => {
  let notes = localStorage.getItem("notes");
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
          console.log(text);

          localStorage.removeItem("notes");
        });
    });
  }
}, 3000);
