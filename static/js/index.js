// LEVEL 1: CREATING TABLE

// Selecting all data and passing to variable
var data = data;

// Selecting table content
let tbody = d3.select("tbody");
    console.log("data was uploaded correctly");

// Creating report object per entry
data.forEach((report) => {
    let entries = Object.entries(report);
    console.log(entries);
})
// Creating 'tr' per report and appending 'td' to pass in data
data.forEach((report) => {
    newtr = tbody.append("tr");
    let entries = Object.entries(report);
    entries.forEach(([key, value]) => {
        newtr.append("td").text(`${value}`);
    });
})

// LEVEL 1: LISTENING TO EVENTS AND SEARCH THROUGH DATE/TIME COLUMN

// Selecting Input button
var button = d3.select("#filter-btn");

// Selecting entire table
var table = d3.select("#table-area");

// Creating Event Handlers
button.on("click", runEnter);
button.on("submit",runEnter);

// Event Handler Function
function runEnter() {

    // Preventing from refreshing website
    d3.event.preventDefault();

    // Selecting input element
    var inputElement = d3.select("#datetime");
    // Getting value out of the inputElement
    var inputValue = inputElement.property("value");

////////////////////////////////////////////////////////////////////////
    // Filtering with 'datetime' column
    var filteredData = data.filter(data => data.datetime === inputValue);
    // console.log(filteredData);
    
    // Creating array with map function to pass in the filtered data
    var datesSearched = filteredData.map(data => data.datetime);
    //console.log(datesSearched);

////////////////////////////////////////////////////////////////////////
    // WHAT GOES HERE?????
    var datetime = data.datetime(datesSearched); // THERES SOMETHING HERE TO CHECK
    var city = data.city(datesSearched);
    var state = data.state(datesSearched);
    var country = data.country(datesSearched);
    var shape = data.shape(datesSearched);
    var durationMinutes = data.durationMinutes(datesSearched);
    var comments = data.comments(datesSearched);
////////////////////////////////////////////////////////////////////////

    // Selecting 'ufo-table' to pass in query results
    var list = d3.select("#ufo-table");

    // Removing previous query results if any // WHERE TO PUT THIS??
    list.html("");


    // Appending 'tr's and 'td's for results into the list
    list.append("li").text(`Date: ${datetime}`);
    list.append("li").text(`City: ${city}`);
    list.append("li").text(`State: ${state}`);
    list.append("li").text(`Country: ${country}`);
    list.append("li").text(`Shape: ${shape}`);
    list.append("li").text(`Duration (minutes): ${durationMinutes}`);
    list.append("li").text(`Comments: ${comments}`);



    

    
};




// data.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) => {
//     let newRow = ufo-table.append("tr");
//     console.log("adding new row")
//     newRow.append("td").text(datetime);
//     newRow.append("td").text(city);
//     newRow.append("td").text(state);
//     newRow.append("td").text(country);
//     newRow.append("td").text(shape);
//     newRow.append("td").text(durationMinutes);
//     newRow.append("td").text(comments);
//   })
  