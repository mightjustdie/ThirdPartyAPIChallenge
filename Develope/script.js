// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // I first want to be able to tell what the current hour and day is.
  var currentHour = dayjs().hour();
  var today = dayjs();
  // Add a listener for click events on the save button. 
  
  // This code should use the id in the containing time-block as a key 
  // to save the user input in local storage.

  // HINT: What does `this` reference in the click listener function?

  //  The Clicked Button

  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked?

  //   By moving from the clicked button element to its parent elements 
  //   and finding the time-block element that has the desired id.

  // How might the id be useful when saving the description in local storage?

  //  It allows you to associate the description with a specific hour of the day. 
  //  When you save the description, you can use the id as the key in local storage,
  //  so that you can retrieve it later when the page is reloaded.

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  
  // HINT: How can the id attribute of each time-block be used to do this?
  
  //

  // TODO: Add code to display the current date in the header of the page.

});
