// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl = $('#save');
var taskEl = $('#textarea');
var h9= $('#h9');
var hour9=$('#hour-9');



var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// pulled from weather app project
function handleSaveButton9am(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var AM9 = $('#h9').val(); 
  // // print to the page
  h9.textContent = AM9;
  localStorage.setItem('9am', h9.textContent);
 
}
saveButtonEl.on('click', handleSaveButton9am);




var currentTime = dayjs();
$('#currentHour').text(currentTime.format('HH:mm'));

var taskTime9 = dayjs().hour(9);


if (taskTime9.isBefore(currentTime)) {
  hour9.addClass('past');
} else if (taskTime9.isSame(currentTime)) {
  hour9.addClass('present');
} else if (taskTime9.isAfter(currentTime)) {
  hour9.addClass('future');
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // **TODO: Add code to display the current date in the header of the page.
});
