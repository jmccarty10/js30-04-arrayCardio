"use strict";
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',
 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
  'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin',
  'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve',
  'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
  'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
/* The long version of the function
const fifteen = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
})*/
// reduced version of function
console.log("Inventors born in the 1500s");
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log("Inventors' first and last names");
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("Inventors by birthdate, oldest to youngest");
/* Long version
const ordered = inventors.sort(function(first, second) {
  if (first.year > second.year) {
    return 1;
  }
  else {
    return -1;
  }
});*/
const ordered = inventors.sort((first, second) => first.year > second.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("Total number of years the inventors lived: " + totalYears);

// 5. Sort the inventors by years lived
// for some reason this is overwriting the first sort
console.log("Inventors sorted by years lived");
const oldest = inventors.sort(function(older, younger) {
  const lastGuy = older.passed - older.year;
  const newGuy = younger.passed - younger.year;
  return lastGuy > newGuy ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
  Run in console on wiki page:
  const category = document.querySelector('.mw-category');
  const links = Array.from(category.querySelectorAll('a'));
  const de = links
              .map(link => link.textContent)
              .filter(streetName => streetName.includes('de'));
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("People sorted alphabetically by last name");
const lastName = people.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(',');
  const [bLast, bFirst] = nextOne.split(',');
  return aLast > bLast ? 1 : -1;
});
console.log(lastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// start with a blank object; every time you loop over one, see if there's an
// a zero to work with - if not, create one; then increment it
const transport = data.reduce(function(obj, item) {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
// those curly brackets are a blank object
console.log(transport);
