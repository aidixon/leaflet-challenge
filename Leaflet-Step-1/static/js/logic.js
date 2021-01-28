// Basic map layer
var myMap = L.map("mapid", {
    center: [32.750, -115.833],
    zoom: 7
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 510,
    maxZoom: 20,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Add a basic marker
var marker = L.marker([32.750, -115.833], {
    draggable: true,
    title: "M 1.8 - 15km E of Ocotillo, CA"
}).addTo(myMap);
// Variable for the json link
var earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create response for the json
d3.json(earthquakeData, function(response) {
    console.log(response);

    // Extract magnitude from the data
 
});

// features, then geometry, then coordinates
// also features then magnitude