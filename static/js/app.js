// From data.js
var tableData = data;

// Console.log the data from data.js
console.log(tableData);

// Loop through the array of given data & append each row to table on to the webpage 
function loadData(data)
    {
    var tbody = d3.select("tbody");
    tbody.html("")
    data.forEach((datarow) => {
        var row = tbody.append("tr");
        Object.values(datarow).forEach((value) => {
            var cell=row.append("td");
            cell.text(value);
        });
    });
}
// Call the function to load the data 
loadData(tableData)

// Get a reference to the input element on the page with the ID property 
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

// Get a reference to the filter button on the page with the ID property set to `filter-btn`
var filterButton = d3.select("#filter-btn");

// Get a reference to the filter button on the page with the ID property set to `filter-btn`
var resetButton = d3.select("#reset-btn");

// Create a function for filtering the data with the given input
function filterData(){

    // IMPORTANT: Prevent the webpage from refreshing
    d3.event.preventDefault();

    // Extract the given input for all the fields on the web page
    var Datevalue = inputDate.property("value")
    var Cityvalue = inputCity.property("value")
    var Statevalue = inputState.property("value")
    var Countryvalue = inputCountry.property("value")
    var Shapevalue = inputShape.property("value")

    console.log(Datevalue,Cityvalue,Statevalue,Countryvalue,Shapevalue);

    // Apply the conditions for filtering the data and assign it to a variable
    var filteredData = tableData.filter(function(recorded){
       return ((recorded.datetime === Datevalue ||Datevalue == "" ) &&
                (recorded.city === Cityvalue ||Cityvalue == "") &&
                (recorded.state === Statevalue ||Statevalue == "")&&
                (recorded.country === Countryvalue ||Countryvalue == "")&&
                (recorded.shape === Shapevalue ||Shapevalue== "")
            )
    })
    
    // Print the filtered data to the console
    console.log(filteredData);
    loadData(filteredData);
}

// Add event handler for the click button to filter the table with the given input
filterButton.on("click",filterData)

// Create a function for resetting the table 
function resetData(){
    tbody.text("")
    loadData()
    }
    
// Add event handler for the reset button to reset the table to original data 
resetButton.on("click",resetData)