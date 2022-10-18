console.log("Random no", Math.floor(Math.random() * 8 + 1));

// ***VARIABLES***
const hero = document.getElementById("hero");
const yourNotes = document.getElementById("yourNotes");
let heroScrollFlag = true;

let bgImgNo = "";
setInterval(() => {
  bgImgNo = Math.floor(Math.random() * 8 + 1);
}, 1031);

function heroBgChange() {
  let screenPosition = window.innerHeight;
  let elementPosition = yourNotes.getBoundingClientRect().top;

  if (screenPosition >= elementPosition) {
    setTimeout(() => {
      hero.style.background = `linear-gradient(rgba(0, 0, 0, 0.177), rgba(174, 171, 171, 0)),
        url(/img/hreo-bg-${bgImgNo}.jpg)`;
      hero.style.height = "80vh";
      hero.style.width = "100vw";
      hero.style.backgroundSize = "100vw 80vh";
      hero.style.backgroundPosition = "center";
      hero.style.backgroundRepeat = "no-repeat";
    }, 1000);
  }
}
window.addEventListener("scroll", () => {
  if (heroScrollFlag == true) {
    setTimeout(() => {
      heroBgChange();
    }, 1000);

    setTimeout(() => {
      heroScrollFlag = false;
      setTimeout(() => {
        heroScrollFlag = true;
      }, 1000);
    }, 1031);
  }
});

// ADD NOTES BACKGROUND ***CHANGE***
let inputFlag = false;
function inputSectionFn() {
  let screenPosition = window.innerHeight;
  const inputSection = document.getElementById("inputSection");
  let elementPosition = yourNotes.getBoundingClientRect().top;
  if (screenPosition >= elementPosition) {
    console.log("Done");
  }
}
window.addEventListener("scroll", () => {
  if (inputFlag == true) {
    inputSectionFn();
    setTimeout(() => {
      inputFlag = false;
      setTimeout(() => {
        inputFlag = true;
      }, 1000);
    }, 1031);
  }
});
