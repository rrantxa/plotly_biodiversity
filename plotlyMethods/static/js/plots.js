// Verify file connection.
console.log(cityGrowths);

// 1. Sort the cities in descending order of population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities);
// 2. Select only the top five cities in terms of growth.
var topFiveCities = sortedCities.slice(0, 5);

console.log(topFiveCities);
// 3. Create separate arrays for the city names and their population growths.
var topFiveCityNames = topFiveCities.map(city => city.City);

// Here, parseInt converts the data from string to integer.
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

// 4. Use Plotly to create a bar chart with these arrays.

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", [trace], layout);

// 5. Use the same dataset to create a bar chart of the seven largest cities by population.
var sortedCitiesbyPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();

console.log(sortedCitiesbyPop);

var topSevenCities = sortedCitiesbyPop.slice(0,7);

console.log(topSevenCities);

var topSevenCityNames = topSevenCities.map(city => city.City);

var topSevenCityPop = topSevenCities.map(city => parseInt(city.population));

console.log(topSevenCityNames);
console.log(topSevenCityPop);

var trace2 = {
    x: topSevenCityNames,
    y: topSevenCityPop,
    type: "bar"
};

var layout2 = {
    title: "Most Populated Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population (2017)"}
}

Plotly.newPlot("bar-plot-2", [trace2], layout2);
