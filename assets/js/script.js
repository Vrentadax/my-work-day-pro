// clicking into event allows edit of events
// save button saves
// saved events persist in localstorage

var tasks = [];

// saves tasks to localStorage
$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    tasks = [];

    $('.time-block').each(function () {
        tasks.push({
            index: $(this).attr('id'),
            textP: $(this).find('textarea').val()
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
});

// load tasks
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            index: [],
            textP: []
        };
    }

    for (i = 0; i < info.length; i++) {
        $('.time-block').each(function () {
            if (tasks[i].index === $(this).attr('id')) {
                $(this).find("description").val(tasks[i].textP);
            };
        });
    };
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
        $(".container").find(i)
        if (time > i) {
            $("#" + i).removeClass('past present future').addClass("past")
        }
        else if (time === i) {
            $("#" + i).removeClass('past present future').addClass("present")
        }
        else if (time < i) {
            $("#" + i).removeClass('past present future').addClass("future")
        }
    }
};

// procedurally creates block items
var createBlocks = function () {
    for (var i = 9; i <= 17; i++) {
        var timeBlock = $("<div>").addClass("row time-block");
        var time = $("<div>").addClass("hour col-1 d-inline pt-3").text(moment().hour(i).format("h A"));
        var text = $("<textarea>").attr("id", i).addClass("description textarea col-10 d-inline pt-3");
        var save = $("<button>").addClass("saveBtn col-1 d-inline pt-3").text("Save");
        $(".container").append(timeBlock.append(time).append(text).append(save));

    }
    updateBlocks();
};

var createTask = function () {
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

// sets interval to check every 10 min for update to class
setInterval(function () {
    updateBlocks()
}, ((1000 * 60) * 10));