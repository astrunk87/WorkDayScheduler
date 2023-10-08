// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl = $('#save');
var taskEl = $('#textarea');
var h9= document.getElementById('h9');
var hour9=$('#hour-9');
var blue=$('#blue');
var AM9=localStorage.getItem('9am');



var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var currentTime = dayjs();
$('#currentHour').text(currentTime.format('HH:mm'));





// var recentTask9= []
function renderRecentTasks() {    
  // var storedtask9am= JSON.parse(localStorage.getItem("9am"));
 $('#h9').text(AM9);
  // h9.textContent = recentTask9[1];
   // recent2.textContent = recentTasks[1]
  // recent3.textContent = recentTasks[2]
}
// function showRecentTasks() {
//   localStorage.getItem('9am');
// }



function init() {
  
  // blue.textContent = AM9;
  // pulled from a class instruction
  // var storedtask9am= JSON.parse(localStorage.getItem("9am"));
  // h9.textContent = storedtask9am;
  
  // if (storedtask9am !== null) {
  //   recentTask9 = storedtask9am;
  // }
  renderRecentTasks();
 
}
//   function storeRecentTasks() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("9am", JSON.stringify(recentTask9));
  
// }
init();
// pulled from weather app project
function handleSaveButton9am(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var AM9am = $('#h9').val(); 
  // // print to the page
  h9.textContent = AM9am;
  // recentTask9.push(h9.textContent)
  localStorage.setItem('9am', JSON.stringify(h9.textContent));
 
  // storeRecentTasks();
  renderRecentTasks();
}
saveButtonEl.on('click', handleSaveButton9am);
  





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
