// from data.js
var tableData = data;

// Select the date filter id
var formDate = d3.select("#dateForm");
// Select the city filter id
var formCity = d3.select("#cityForm");
// Select the state filter id
var formState = d3.select("#stateForm");
// Select the country filter id
var formCountry = d3.select("#countryForm");
// Select the shape filter id
var selectShape = d3.select("#shapeForm");
// Select the button id
var button = d3.select("#filter-btn");
// Select the form id
var form = d3.select("#filterForm");

// Create event handlers
formDate.on("submit", runSubmit);
formCity.on("submit", runSubmit);
formState.on("submit", runSubmit);
formCountry.on("submit", runSubmit);
selectShape.on("change", runSubmit);
button.on("click", runSubmit);
form.on("submit", runSubmit);


// // Helper pieces for Level 2
// // Get all shape values in the data.js file
// var shapes = data.map(function(record){
//     return record.shape;
// })
// console.log(shapes)

// // Get unique shapes, based on example from https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
// var uniqueShapes = shapes.filter(onlyUnique);
// console.log(uniqueShapes); 

// Event handler function
function runSubmit(){
    // Prevent page refresh
    d3.event.preventDefault();
    console.log("form submit works my guy")

    // Select the datetime id from the filter, get the value from the datetime id element
    var filterDate = d3.select("#datetime");
    var inputDate = filterDate.property("value");
    
    // Select the locCity id from the filter, get the value from the datetime id element
    var filterCity = d3.select("#locCity");
    var inputCity = filterCity.property("value");

    // Select the locState id from the filter, get the value from the datetime id element
    var filterState = d3.select("#locState");
    var inputState = filterState.property("value");

    // Select the locCountry id from the filter, get the value from the datetime id element
    var filterCountry = d3.select("#locCountry");
    var inputCountry = filterCountry.property("value");

    // Select the mltislct id, get the value from the mltislct id element
    var filterShape = d3.select("#shapeSelect");
    var inputShape = filterShape.property("value");

    // Log the entered input date and the full table data
    console.log(inputDate);
    console.log(tableData);

    // Set the filtered data equal to the table data to start
    var filteredTable = tableData;

    // if there's an input date, then apply the filter
    if (inputDate !== ""){
        filteredTable = filteredTable.filter(tableData => tableData.datetime === inputDate);
    }

    // if there's an input city, then apply the filter
    if (inputCity !== ""){
        filteredTable = filteredTable.filter(tableData => tableData.city === inputCity);
    } 
    
    // if there's an input state, then apply the filter
    if (inputState !== ""){
        filteredTable = filteredTable.filter(tableData => tableData.state === inputState);
    }
        
    // if there's an input country, then apply the filter
    if (inputCountry !== ""){
        filteredTable = filteredTable.filter(tableData => tableData.country === inputCountry);
    }

    // if there's an input shape, then apply the filter
    if (inputShape !== "any"){
        filteredTable = filteredTable.filter(tableData => tableData.shape === inputShape);
    }

    // Log the filtered table data in the console
    console.log(filteredTable);

    // Select the ufo table id 
    var tableOut = d3.select("#ufo-table>tbody");

    // Clear out any previous table data
    tableOut.html("");
    
    // Place the filtered results in a results table
    filteredTable.forEach(function(filteredTable){
        tableOut.append("tr");
        tableOut.append("td").text(filteredTable.datetime);
        tableOut.append("td").text(filteredTable.city);
        tableOut.append("td").text(filteredTable.state);
        tableOut.append("td").text(filteredTable.country);
        tableOut.append("td").text(filteredTable.shape);
        tableOut.append("td").text(filteredTable.durationMinutes);
        tableOut.append("td").text(filteredTable.comments);
    })
};
