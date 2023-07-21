let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
// function moreCats() {
//   destructivelyAppendCat("Ralph");
// }

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
console.log(cats);
function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

let copyCat = [...cats];
console.log(copyCat);

function appendCat(name) {
  copyCat.push(name);
  return copyCat;
}

let newCat = [...copyCat];

function prependCat(name) {
  newCat.unshift(name);
  return newCat;
}
let cat3 = [...newCat];

function removeLastCat() {
  cat3.pop();
  return cat3;
}

let cat4 = [...cat3];

function removeFirstCat() {
  cat4.shift();
  return cat4;
}
