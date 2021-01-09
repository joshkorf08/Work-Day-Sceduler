var currentDay = $("#currentDay");

currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentDay = null,
        date = null;

var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
    var keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format("LLL"));
    function timeFrame() {
        var currentHours = moment().hours();

        $(".time-block").each(function () {
            var hourEl = $(this).attr("id");
            var hourDay = hourEl.substring(5, hourEl.length);
            var intHourDay = parseInt(hourDay)
            var intCurrentHours = parseInt(currentHours);
            if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })
    };
    timeFrame();
});
 