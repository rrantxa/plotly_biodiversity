Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotTwo", [{x: [5, 10, 15], y:[10, 20, 30]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

// Axis titles need to come as objects with key-value pairs.
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

// Plotly needs an object inside an array in order to plot the chart.
Plotly.newPlot("barPlot", [trace], layout);

var drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]
var percent = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

var trace2 = {
    x: drinks,
    y: percent,
    type: "bar"
};

var layout2 = {
    title: "Drinks Survey",
    xaxis: {title: "Drink Type"},
    yaxis: {title: "Percent of Drinks Ordered"}
};

Plotly.newPlot("barTwo", [trace2], layout2);

// Creating a pie chart using Plotly.

var trace3 = {
    labels: drinks,
    values: percent,
    type: "pie"
};

var layout3 = {
    title: "Pie Chart"
};

Plotly.newPlot("pieChart", [trace3], layout3)

// Creating a Scatter Plot. 

var trace4 = {
    x: [7, 6, 5, 4],
    y: [9, 3, 7, 2],
    mode: "markers",
    type: "scatter",
    name: "Data 1",
    text: ["five", "six", "seven", "eight"],
    marker: {size: 12}
};

// Mode can also be "lines" or "lines+markers"
var trace5 = {
    x: [1, 2, 3, 4],
    y: [4, 3, 2, 1],
    mode: "markers",
    type: "scatter",
    name: "Data 2",
    text: ["one", "two", "three", "four"],
    marker: {size: 12}
};

var data = [trace4, trace5];

var layout4 = {
    xaxis: {
        range: [0, 10]
    },
    yaxis: {
        range: [0, 10]
    }, 
    title: "Data Demo"
}

Plotly.newPlot("scatterPlot", data, layout4);


