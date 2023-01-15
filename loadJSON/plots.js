console.log("Hello World!");

d3.json("samples.json").then(data => console.log(data));

// Iterating through the JSON to find washing frequency

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sorting the data in descending order.

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq)
    .sort((a,b) => b - a);
    console.log(wfreq)
})

// Deleting null values from the array.
// != means "different from"

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq)
    .sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq)
})

// Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).

d3.json("samples.json").then(data => console.log(data.metadata[0]));

d3.json("samples.json").then(function(data){
    firstEntry = data.metadata[0];
    firstArray = Object.entries(firstEntry);
    firstArray.forEach(([key, value]) => console.log(`${key}: ${value}`));
});