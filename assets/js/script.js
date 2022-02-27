// clicking into event allows edit of events
// save button saves
// saved events persist in localstorage

var tasks = "";

// saves tasks to localStorage
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// load tasks
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks) {
        tasks = ""; 
    }

    // need to cycle through tasks and append to correct time slot (pass to createtask function)
};

// displays today's date in header
var displayToday = function () {
    var today = moment().format("[Today is] dddd, MMMM Do");
    console.log(today);
    $("#currentDay").append(today);
};

// updates time blocks with coloration depending if past/present/future
var updateBlocks = function () {
    var time = moment().get("h");
    console.log(time);
    for (var i = 9; i <= 17; i++) {
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

// procedurally creates block items
var createBlocks = function () {
    for (var i = 9; i <= 17; i++) {
        var timeBlock = $("<div>").addClass("row time-block h-" + i);
        var time = $("<div>").addClass("hour col-1 d-inline pt-3").text(moment().hour(i).format("h A"));
        var text = $("<div>").addClass("description col-10 d-inline pt-3 t-" + i);
        var save = $("<div>").addClass("saveBtn col-1 d-inline pt-3 s-" + i).text("Save");
        $(".container").append(timeBlock.append(time).append(text).append(save));

    }
    updateBlocks();
};

var createTask = function() {
    var taskP = $("<p>")
    .text(taskText);

    // need to create task (if any) and assign to correct block
};

displayToday();
createBlocks();

// event listener needs to listen to active click on block to allow p edit
$(".description").on("click", "div", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// sets interval to check every 30 min for update to class
setInterval(function () {
    updateBlocks()
}, ((1000 * 60) * 30));