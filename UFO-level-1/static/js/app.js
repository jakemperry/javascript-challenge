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

    var tableOut = d3.select("#ufo-table>tbody");

    tableOut.html("");

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