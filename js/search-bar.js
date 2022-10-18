let searchTxt = document.getElementById("search");
searchTxt.innerText = "";
searchTxt.addEventListener("input", () => {
  let inputVal = searchTxt.value.toLocaleLowerCase();
  let notesCard = document.getElementsByClassName("notes-card");
  Array.from(notesCard).forEach((element) => {
    // console.log(element);
    let notesCardTxt = element.getElementsByTagName("div")[0].innerText;
    // console.log(notesCardTxt);
    if (notesCardTxt.toLocaleLowerCase().includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
