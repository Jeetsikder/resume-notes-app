// let date = new Date().toISOString();
// console.log(`Date :- ${date}`);

// let currDate = new Date(date).toLocaleTimeString();
// console.log(`Current Data :- ${currDate}`);
// // console.log * `Current Time :- ${date.toLocaleTimeString

// ` <button id="${key}" onclick="deleteNotes2(this)" class="delete-btn btn btn-brand mt-3">Delete Note</button>`;
console.log("Delete");
let theData2 = document.getElementById("demo");
console.log(theData2);

let hero = "Hero 2";
let hello = "Hay bro";
function dom(name1, name2, dom) {
  const html = `<h1 class="text-white">${name1}</h1>
             <p>${name2}</p>`;
  //   console.log(html);
  const insert = document.getElementById(`${dom}`);
  return (insert.innerHTML = html);
}

(function makeRequest1() {
  const theData1 = dom(hero, hello, theData2);
  console.log(theData1);
})();
