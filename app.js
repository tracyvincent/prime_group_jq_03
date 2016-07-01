
$('document').ready(function() {

var names = ['Richard', 'Jon', 'Tracy', 'Sahasha', 'BrianA', 'BrianV',
 'Megan', 'Justin', 'Hillary', 'Liz', 'Donovan', 'Connor', 'Cormac',
 'Ryan', 'Kyle', 'Andrew', 'Trent', 'Anthony', 'Katie', 'RyanM', 'Joel'];

var groups = ['Star Wars Geeks', 'Browncoats', 'Team GoT',
'Ren Festies', 'Big Bangers', 'Baseball Fans', 'Comedy Lovers',
'Harry Potter People', 'Team Artsy', 'Supernaturalists'];

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
var supernaturalists = [];


var allGroups = [starWarsGeeks, brownCoats, teamGoT, renFesties, bigBangers,
 baseballFans, comedyLovers, harryPotterPeople, teamArtsy, supernaturalists];

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
     $('.groups').append('<div><h3>' + groups[i] + '</h3><br/>' +
       formatGroup(finalGroups[i]) + '</ul></div>');

   }
 }

 function initializeGroups(allGroups){
   for (i = 0; i < allGroups.length; i++){
     allGroups[i] = [];
   }
 }


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
   $('.groups').fadeOut();

 });
 console.log(numGroups);

 $('body').on('click', '#generator', function() {
   initializeGroups(allGroups);
   shuffle(names);
   addTeammates();
   pushToPage(numGroups, allGroups, groups);

   $('.groups').fadeIn();


 //  addTheseGroups();
 });
 });
