// Initial visualization.
function initial(){
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];
    Plotly.newPlot("plot", data);
};

// D3 select the dropdownmenu.
d3.selectAll("#dropdownMenu").on("change", updatePlotly);

// Create a function to change the plot when selected.
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");

    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    if (dataset === "dataset1"){
        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === "dataset2") {
        yData = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xData],
        y: [yData],
    };

    // Restyle takes "plot"(div) and trace (as an object rather than an array)
    Plotly.restyle("plot", trace);
};

initial();