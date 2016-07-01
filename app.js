$('document').ready(function(){
var numGroups = 2;
var names = ['Richard', 'Jon', 'Tracy', 'Sahasha', 'BrianA', 'BrianV', 'Megan', 'Justin',
'Hillary', 'Liz', 'Donovan', 'Connor', 'Cormac', 'Ryan', 'Kyle', 'Andrew', 'Trent',
'Anthony', 'Katie', 'RyanM', 'Joel'];

var groups = ['Star Wars Geeks', 'Harry Potter People', 'Team GoT',
'Big Bang Theorists', 'Baseball Fans', 'Comedy Lovers', 'Brown Coats',
'Team Artsy', 'Ren Festie'];

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


function formatGroup (randomizedGroup) {
  var groupList = '';
  for (var i = 0; i < randomizedGroup.length; i++) {
    groupList += '<li>' + randomizedGroup[i] + '</li>';
  }
  return groupList;
}

function pushToPage(numGroups, finalGroups, groups) {
  $('.groups').empty();
  for (var i = 0; i < numGroups; i++) {
    $('.groups').append('<h3>' + groups[i] + '</h3><br/><ul>' +
      formatGroup(finalGroups[i]) + '</ul>');
  }
}

function initializeGroups(allGroups){
  for (i = 0; i < allGroups.length; i++){
    allGroups[i] = [];
  }
}


// don't need to pass params to addTheseGroups, use the globals inside the function
// right now, successfully assigning number and shuffling array, and calling this function
// with the correct numGroups
// now just use the names array, numGroups, and allGroups to push to new array
// function addTheseGroups() {
//   for (var i = 0; i < numGroups; i++) {
//     theseGroups.push(allGroups[i]);
//   };
//   return theseGroups;
//};
  //var thisArray = addTheseGroups();
function addTeammates() {
  var counter = 0;
  for (var i = 0; i < names.length ; i++) {
      if (counter > numGroups-1){
        counter = 0;
      };
    allGroups[counter].push(names[i]);
    counter++;
      // var x = i % numGroups;
      // allGroups[x].push(names[i]);
    };
  };


  // addTheseGroups();
  // addTeammates();
  // console.log(theseGroups);
  // console.log(starWarsGeeks);
  // console.log(brownCoats);
  // console.log(shuffle(names));

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

$('body').on('click', '.number', function() {
  numGroups = parseInt($(this).html());
});
console.log(numGroups);

$('body').on('click', '#generator', function() {
  initializeGroups(allGroups);
  shuffle(names);
  addTeammates();
  pushToPage(numGroups, allGroups, groups);
//  addTheseGroups();
});
// function genGroups() {
//   var p = 0;
//   while (p < (names.length - 1)) {
//     for (var i = 0; i < numGroups; i++) {
//       if (typeof finalGroups[i] === 'undefined') {
//         finalGroups[i] = [];
//       }
//       finalGroups[i].push(names[p]);
//       p++;
//     }
//   }
// }
// // Used like so
// // var arr = [2, 11, 37, 42];
// // shuffle(arr);
// // console.log(arr);
//
//   //shuffle(names);
//
//   $('button.number').click(function() {
//     numGroups = parseInt($(this).html());
//   });
//
//   $('button#generator').click(function() {
//     shuffle(names);
//     genGroups();
//     pushToPage(numGroups, finalGroups, groups);
//   })
//   // pushToPage(2, finalGroups, groups);
});
