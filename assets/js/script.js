// displays today"s date in header
var displayToday = function () {
    var today = moment().format("[Today is] dddd, MMMM Do");
    console.log(today);
    $("#currentDay").append(today);
};

var tasks = [];

// load saved tasks
function loadtasks() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks) {
        return false;
    };
    
    for (i = 0; i < tasks.length; i++) {
        $(".time-block").each(function() {
            if (tasks[i].timeSlot === $(this).attr("id")) {
                $(this).find("textarea").val(tasks[i].text);
            };
        });
    };
};

// save tasks on click
$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    tasks = [];

    $(".time-block").each(function() {
        tasks.push({
            timeSlot: $(this).attr("id"),
            text: $(this).find("textarea").val()
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
});

// procedurally creates block items
// intended this as a way to change time slots some what on the fly, wasn't working. leaving it commented out because I feel I was onto something.
// var createBlocks = function () {
//     for (var i = 9; i <= 17; i++) {
//         var timeBlock = $("<div>").attr("id", i).addClass("row time-block");
//         var time = $("<div>").addClass("hour col-1").text(moment().hour(i).format("h A"));
//         var text = $("<textarea>").addClass("description col-10");
//         var save = $("<button>").addClass("saveBtn col-1").text("Save");
//         $(".container").append(timeBlock.append(time).append(text).append(save));
//     }
// };

// updates time blocks with coloration depending if past/present/future
var updateBlocks = function () {
    var time = moment().get("h");
    console.log(time);

    for (var i = 9; i <= 17; i++) {
        $(".container").find(i)
        if (time > i) {
            $("#" + i).removeClass("past present future").addClass("past")
        }    
        else if (time === i) {
            $("#" + i).removeClass("past present future").addClass("present")
        }    
        else if (time < i) {
            $("#" + i).removeClass("past present future").addClass("future")
        }    
    }    
};    

// sets interval to check every 10 min for update to class
setInterval(function () {
    updateBlocks()
}, ((1000 * 60) * 10));

displayToday();
// createBlocks();
updateBlocks();
loadtasks();