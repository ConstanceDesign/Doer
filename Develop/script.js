// when the app is opened
$(document).ready(function () {
  // current date and time are displayed
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  // get current value of textarea
  var text = $(this).val();

  var currentHour = moment().hours();
  console.log("currentHour", currentHour);

  // hour blocks are identified as past, present, or future
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // when the app is opened the text areas are populated from local storage
  $("#5 .description").val(localStorage.getItem("5"));
  $("#6 .description").val(localStorage.getItem("6"));
  $("#7 .description").val(localStorage.getItem("7"));
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
  $("#19 .description").val(localStorage.getItem("19"));
  $("#20 .description").val(localStorage.getItem("20"));
  $("#21 .description").val(localStorage.getItem("21"));
  $("#22 .description").val(localStorage.getItem("22"));
  $("#23 .description").val(localStorage.getItem("23"));
  $("#0 .description").val(localStorage.getItem("0"));

  // text areas are saved to local storage
});
