const url = "https://api.spacexdata.com/v4/launchpads";

// D3 can open JSON type files using the following syntax:
d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve only the first object in the array.

d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// Retrieve only the name of the station.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Access the latitude of the first station.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].latitude));

d3.json(url).then(function(spaceXResults){
    latitudes = spaceXResults.map(latitude => latitude.latitude);
    console.log(latitudes);
    longitudes = spaceXResults.map(longitude => longitude.longitude);
    console.log(longitudes)
});


