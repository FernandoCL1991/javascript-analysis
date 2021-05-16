// CREATING TABLE
////////////////////////////////////////////////////////////////////////////
// Selecting all data and passing to variable
var data = data;
// Selecting table content
let tbody = d3.select("tbody");
    console.log("data was uploaded correctly");
// Creating report object per entry
data.forEach((report) => {
    let entries = Object.entries(report);
    console.log(entries);
});
// Creating 'tr' per report and appending 'td' to pass in data
data.forEach((report) => {
    newtr = tbody.append("tr");
    let entries = Object.entries(report);
    entries.forEach(([key, value]) => {
        newtr.append("td").text(`${value}`);
    });
});

// SEARCH THROUGH DATE/TIME COLUMN
////////////////////////////////////////////////////////////////////////////
// Selecting Input button
var button = d3.select("#filter-btn");
// Selecting entire table
var table = d3.select("#table-area");
// Creating Event Handlers
button.on("click", runEnter);
button.on("submit",runEnter);

// EVENT HANDLER FUNCTION
////////////////////////////////////////////////////////////////////////////
function runEnter() {
    // Preventing from refreshing website
    d3.event.preventDefault();
    // Selecting input element
    var inputElement = d3.select("#datetime");
    // Getting value out of the inputElement
    var inputValue = inputElement.property("value");
    // Filtering with 'datetime' column
    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log("Loading filteredData... Done!")
    console.log("Printing resulting queries...", filteredData);
    // Removing previous query results if any
    tbody.html("");
    // Creating 'tr' per report and appending 'td' to pass in data
    filteredData.forEach((report) => {
        newtr = tbody.append("tr");
        let entries = Object.entries(report);
        entries.forEach(([key, value]) => {
            newtr.append("td").text(`${value}`);
        });
    })
};