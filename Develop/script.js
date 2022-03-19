$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $("#saveBtn").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});
