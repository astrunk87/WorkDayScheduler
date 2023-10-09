// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var taskEl = $('#textarea');
var saveButtonEl9 = $('#save9');
var h9= $('#h9');
var hour9=$('#hour-9');
var AM9=localStorage.getItem('9am');

var saveButtonEl10 = $('#save10');
var h10=$('#10');
var hour10=$('#hour-10');
var AM10=localStorage.getItem('10am');

var saveButtonEl11 = $('#save11');
var h11=$('#11');
var hour11=$('#hour-11');
var AM11=localStorage.getItem('11am');

var saveButtonEl12 = $('#save12');
var h12=$('#12');
var hour12=$('#hour-12');
var PM12=localStorage.getItem('12pm');

var saveButtonEl13 = $('#save13');
var h13=$('#13');
var hour13=$('#hour-13');
var PM1=localStorage.getItem('1pm');



var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var currentTime = dayjs();
$('#currentHour').text(currentTime.format('HH:mm'));

// var recentTask9= []
function renderRecentTasks() {    
  // var storedtask9am= JSON.parse(localStorage.getItem("9am"));
 $('#h9').text(AM9);
 $('#h10').text(AM10);
 $('#h11').text(AM11);
 $('#h12').text(PM12);
 $('#h13').text(PM1);
 
}

function init() {
  renderRecentTasks(); 
}


// pulled from weather app project and edited
function handleSaveButton9am(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var AM9text = $('#h9').val(); 
  h9.textContent = AM9text;
  localStorage.setItem('9am', h9.textContent);
}
saveButtonEl9.on('click', handleSaveButton9am);
  
function handleSaveButton10am(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var AM10text = $('#h10').val(); 
  h10.textContent = AM10text;
  localStorage.setItem('10am', h10.textContent); 
}
saveButtonEl10.on('click', handleSaveButton10am);

function handleSaveButton11am(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var AM11text = $('#h11').val(); 
  h11.textContent = AM11text;
  localStorage.setItem('11am', h11.textContent);
}
saveButtonEl11.on('click', handleSaveButton11am);

function handleSaveButton12pm(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var hr12text = $('#h12').val(); 
  h12.textContent = hr12text;
  localStorage.setItem('12pm', h12.textContent);
}
saveButtonEl12.on('click', handleSaveButton12pm);

function handleSaveButton1pm(event) {
  event.preventDefault();  
  // select form element by its `name` attribute and get its value
  var hr13text = $('#h13').val(); 
  h13.textContent = hr13text;
  localStorage.setItem('1pm', h13.textContent);
}
saveButtonEl13.on('click', handleSaveButton1pm);

init();


var taskTime9 = dayjs().hour(9);
if (taskTime9.isBefore(currentTime)) {
  hour9.addClass('past');
} else if (taskTime9.isSame(currentTime)) {
  hour9.addClass('present');
} else if (taskTime9.isAfter(currentTime)) {
  hour9.addClass('future');
};

var taskTime10 = dayjs().hour(10);
if (taskTime10.isBefore(currentTime)) {
  hour10.addClass('past');
} else if (taskTime10.isSame(currentTime)) {
  hour10.addClass('present');
} else if (taskTime10.isAfter(currentTime)) {
  hour10.addClass('future');
};

var taskTime11 = dayjs().hour(11);
if (taskTime11.isBefore(currentTime)) {
  hour11.addClass('past');
} else if (taskTime11.isSame(currentTime)) {
  hour11.addClass('present');
} else if (taskTime11.isAfter(currentTime)) {
  hour11.addClass('future');
};

var taskTime12 = dayjs().hour(12);
if (taskTime12.isBefore(currentTime)) {
  hour12.addClass('past');
} else if (taskTime12.isSame(currentTime)) {
  hour12.addClass('present');
} else if (taskTime12.isAfter(currentTime)) {
  hour12.addClass('future');
};

var taskTime13 = dayjs().hour(13);
if (taskTime13.isBefore(currentTime)) {
  hour13.addClass('past');
} else if (taskTime13.isSame(currentTime)) {
  hour13.addClass('present');
} else if (taskTime13.isAfter(currentTime)) {
  hour13.addClass('future');
};




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
