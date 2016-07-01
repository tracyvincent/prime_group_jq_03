$('document').ready(function() {

var names = ['Richard', 'Jon', 'Tracy', 'Sahasha', 'BrianA', 'BrianV',
 'Megan', 'Justin', 'Hillary', 'Liz', 'Donovan', 'Connor', 'Cormac',
 'Ryan', 'Kyle', 'Andrew', 'Trent', 'Anthony', 'Katie', 'RyanM', 'Joel'];

var groups = ['Star Wars Geeks', 'Brown Coats', 'Team GoT',
'Ren Festies', 'Big Bangers', 'Baseball Fans', 'Comedy Lovers',
'Harry Potter People', 'Team Artsy'];

var numGroups = 5;

var starWarsGeeks = [];
var harryPotterPeople = [];
var teamGoT = [];
var renFesties = [];
var bigBangers = [];
var baseballFans = [];
var comedyLovers = [];
var brownCoats = [];
var teamArtsy = [];

var allGroups = [starWarsGeeks, brownCoats, teamGoT, renFesties, bigBangers,
 baseballFans, comedyLovers, harryPotterPeople, teamArtsy];

var theseGroups = [];

// don't need to pass params to addTheseGroups, use the globals inside the function
// right now, successfully assigning number and shuffling array, and calling this function
// with the correct numGroups
// now just use the names array, numGroups, and allGroups to push to new array
function addTheseGroups() {
  for (var i = 0; i < numGroups; i++) {
    theseGroups.push(allGroups[i]);
  };
  return theseGroups;
};
  //var thisArray = addTheseGroups();
function addTeammates() {
  for (var i = 0; i < 21 ; i++) {
      var x = i % 5;
      theseGroups[x].push(names[i]);
    };
  };


  addTheseGroups();
  addTeammates();
  //console.log(theseGroups);
  console.log(starWarsGeeks);
  console.log(brownCoats);
  console.log(teamGoT);
  console.log(renFesties);
  console.log();
  //console.log(shuffle(names));

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

// shuffle(names);
// console.log(names);

$('body').on('click', '#number', function() {
  numGroups = parseInt($(this).text());
});
console.log(numGroups);

$('body').on('click', '#generator', function() {
  shuffle(names);
  addTheseGroups();
});









});
