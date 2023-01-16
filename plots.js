function init() {
    // Select the dropdown menu. Assign it to the "selector" variable.
    var selector = d3.select("#selDataset");

    // Read the samples data using D3. The data is assigned to "data".
    d3.json("samples.json").then((data) =>{
        console.log(data);

        // Access the ID numbers with the "sampleNames" variable.
        var sampleNames = data.names;

        // In this code, note that the forEach() method is called on the sampleNames array. 
        sampleNames.forEach((sample) => {
            selector
            // For each element in the array, a dropdown menu option is appended. 
            .append("option")
            // The text of each dropdown menu option is the ID. 
            .text(sample)
            // Its value property is also assigned the ID.
            .property("value", sample);
        });
    })}   

init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// The function buildMetadata() takes in sample, or an ID number, as its argument. 
function buildMetadata (sample) {
    d3.json("samples.json").then((data) => {
        // The metadata array in the dataset (data.metadata) is assigned the variable metadata.
        var metadata = data.metadata;
        // Then the filter() method is called on the metadata array to filter for an object in the array...
        // .. whose id property matches the ID number passed into buildMetadata() as sample.
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // Because the results of the filter() method are returned as an array, 
        // the first item in the array (resultArray[0]) is selected and assigned the variable result.
        var result = resultArray[0];
        var resultData = Object.entries(result);

        var PANEL = d3.select("#sample-metadata");

        //PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu.
        PANEL.html("");
        resultData.forEach(([key, value])=> PANEL.append("h6").text(`${key}: ${value}`))
    });
}