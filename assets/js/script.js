// standard timeblocks (9a-5p)
// check if time is past/current/future and color code accordingly
// clicking into event allows edit of events
// save button saves
// saved events persist in localstorage

var tasks = {};

// saves tasks to localStorage
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// load tasks
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // create logic that will cycle through saved arrays
};

var displayToday = function () {
    var today = moment().format("[Today is] dddd, MMMM Do");
    console.log(today);
    $("#currentDay").append(today);
};

displayToday();