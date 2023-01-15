// Map method in JS.
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(number => number * 2);

console.log(doubled)

var numbers_2 = [0, 2, 4, 6, 8];

var plus = numbers_2.map(number => number + 5);

console.log(plus);

// Filter method. 

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(city => city.population);

console.log(cityPopulation);

var numbers3 = [1,2,3,4,5];

var larger = numbers.filter(number => number > 1);

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sWords = words.filter(word => word.includes("s"));

console.log(sWords);


sWords_2 = words.filter(word => word.startsWith("s"));
console.log(sWords_2);

// Sort method.
var familyAge = [3,2,39,37,9];

var sortedAge = familyAge.sort((a,b) => a - b);

console.log(sortedAge);

// Slice method. Begins at index position 1 and stops before reachind index position 2.

var integers = [0, 1, 2, 3, 4, 5];
var slice1 = integers.slice(0,2);

console.log(slice1);

// To slice to the end of an array, we can ommit the second argument.
var words3 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
slice2 = words3.slice(3, );

console.log(slice2);