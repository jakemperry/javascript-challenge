// from data.js
var tableData = data;

// Select the filter id
var filter = d3.select("#filters")
// Select the button id
var button = d3.select("#filter-btn")

// Creat event handlers
filter.on("submit", runSubmit);
button.on("click", runSubmit);

// Event handler function
function runSubmit(){
    // Prevent page refresh
    d3.event.preventDefault();

    var filterElement = d3.select("#datetime");

    var inputDate = filterElement.property("value");

    console.log(inputDate);
    console.log(tableData);

    var filteredTable = tableData.filter(tableData => tableData.datetime === inputDate);

    console.log(filteredTable);
}