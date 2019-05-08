// from data.js
var tableData = data;

// YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table and loop through them to add to the table in html
function displayData(ufodata){ 
    tbody.text("")
    ufodata.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect(){
    //not refreshing the page!
    d3.event.preventDefault();
    //print the input values
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    if (dateInputText.property("value") > ' ') {
        var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
        //display the new table
        displayData(new_table);
    } else {
        displayData(tableData);
    }
}

// event listener to handle change and click
var submit = d3.select("#filter-btn");
submit.on("click", clickSelect)
