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
    // Select the datetime id from the filter
    var filterElement = d3.select("#datetime");
    // get the value from the datetime id element
    var inputDate = filterElement.property("value");
    // Log the entered input date and the full table data
    console.log(inputDate);
    console.log(tableData);
    // Set the filtered data equal to the table data to start
    var filteredTable = tableData;
    // if there's an input date, then apply the filter
    if (inputDate !== ""){
        filteredTable = filteredTable.filter(tableData => tableData.datetime === inputDate);
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