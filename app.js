$('document').ready(function(){

var names = [Richard, Jon, Tracy, Sahasha, BrianA, BrianV, Megan, Justin,
Hillary, Liz, Donovan, Connor, Cormac, Ryan, Kyle, Andrew, Trent,
Anthony, Katie, RyanM, Joel];

var groups = ['Star Wars Geeks', 'Harry Potter People', 'Team GoT',
'Big Bang Theorists', 'Baseball Fans', 'Comedy Lovers', 'Brown Coats',
'Team Artsy', 'Ren Festie'];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);

shuffle(names);
console.log(names);









});
