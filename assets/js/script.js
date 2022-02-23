// standard timeblocks for that day (9a-5p)
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
    // should be first thing (minus displayToday) that runs
};

var displayToday = function () {
    var today = moment().format("[Today is] dddd, MMMM Do");
    console.log(today);
    $("#currentDay").append(today);
};

var createBlocks = function () {
    for (i=9; i <= 17; i++) {
        var timeBlock = $("<div>").addClass("row time-block h-" + i);
        var time = $("<div>").addClass("hour col-1 d-inline pt-3").text(moment().hour(i).format("h A"));
        var text = $("<div>").addClass("description col-10 d-inline pt-3").text("Sample");
        var save = $("<div>").addClass("saveBtn col-1 d-inline pt-3").text("Save");
        $(".container").append(timeBlock.append(time).append(text).append(save));

    }
}

displayToday();
createBlocks();