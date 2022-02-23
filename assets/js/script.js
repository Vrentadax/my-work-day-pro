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

// updates time blocks with coloration depending if past/present/future
var updateBlocks = function () {
    var time = moment().get("h");
    console.log(time);
    for (var i=9; i<=17; i++) {
        $(".container").find("t-" + i)
        if (time > i) {
            $(".t-" + i).addClass("past")
        }
        else if (time === i) {
            $(".t-" + i).addClass("present")
        }
        else if (time < i) {
            $(".t-" + i).addClass("future")
        }
    }
};

var createBlocks = function () {
    for (var i=9; i <= 17; i++) {
        var timeBlock = $("<div>").addClass("row time-block h-" + i);
        var time = $("<div>").addClass("hour col-1 d-inline pt-3").text(moment().hour(i).format("h A"));
        var text = $("<div>").addClass("description col-10 d-inline pt-3 t-" + i).text("Sample");
        var save = $("<div>").addClass("saveBtn col-1 d-inline pt-3 s-" + i).text("Save");
        $(".container").append(timeBlock.append(time).append(text).append(save));

    }
    updateBlocks();
}

displayToday();
createBlocks();

// sets interval to check every 30 min for update to class
setInterval(function() {
    updateBlocks()
  }, ((1000*60)*30));