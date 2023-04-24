$(document).ready(function () {
  // get current date and time using dayjs library
  var now = dayjs();
  var currentHour = now.hour();

  // display current date and time at the top of the page
  $("#currentDay").text(now.format("dddd, MMMM D, YYYY, h:mm A"));

  // loop through all time blocks
  $(".time-block").each(function () {
    // get the hour for this time block from its id attribute
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // set the class for this time block based on whether it is in the past, present, or future
    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }

    // retrieve the text from local storage for this time block, if it exists
    var blockText = localStorage.getItem("hour-" + blockHour);

    // set the text for the description textarea for this time block
    $(this).find(".description").val(blockText);
  });

  // save text in local storage when save button is clicked
  $(".saveBtn").on("click", function () {
    // get the hour for this time block from its parent div's id attribute
    var blockHour = parseInt($(this).parent().attr("id").split("-")[1]);

    // get the text from the description textarea for this time block
    var blockText = $(this).siblings(".description").val();

    // save the text in local storage for this time block
    localStorage.setItem("hour-" + blockHour, blockText);
  });
});
