
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

var saveButtonEl14 = $('#save14');
var h14=$('#14');
var hour14=$('#hour-14');
var PM2=localStorage.getItem('2pm');

var saveButtonEl15 = $('#save15');
var h15=$('#15');
var hour15=$('#hour-15');
var PM3=localStorage.getItem('3pm');

var saveButtonEl16 = $('#save16');
var h16=$('#16');
var hour16=$('#hour-16');
var PM4=localStorage.getItem('4pm');

var saveButtonEl17 = $('#save17');
var h17=$('#17');
var hour17=$('#hour-17');
var PM5=localStorage.getItem('5pm');

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

const currentTime = dayjs().hour();
$('#currentHour').text("current time: " + today.format('hh:mm a'));

function renderRecentTasks() {    
 $('#h9').text(AM9);
 $('#h10').text(AM10);
 $('#h11').text(AM11);
 $('#h12').text(PM12);
 $('#h13').text(PM1);
 $('#h14').text(PM2);
 $('#h15').text(PM3);
 $('#h16').text(PM4);
 $('#h17').text(PM5);

}

function init() {
  renderRecentTasks(); 
}


// pulled from weather app project and edited
function handleSaveButton9am() {
  var AM9text = $('#h9').val(); 
  h9.textContent = AM9text;
  localStorage.setItem('9am', h9.textContent);
}
saveButtonEl9.on('click', handleSaveButton9am);
  
function handleSaveButton10am() {
  var AM10text = $('#h10').val(); 
  h10.textContent = AM10text;
  localStorage.setItem('10am', h10.textContent); 
}
saveButtonEl10.on('click', handleSaveButton10am);

function handleSaveButton11am() {
  var AM11text = $('#h11').val(); 
  h11.textContent = AM11text;
  localStorage.setItem('11am', h11.textContent);
}
saveButtonEl11.on('click', handleSaveButton11am);

function handleSaveButton12pm() {
  var hr12text = $('#h12').val(); 
  h12.textContent = hr12text;
  localStorage.setItem('12pm', h12.textContent);
}
saveButtonEl12.on('click', handleSaveButton12pm);

function handleSaveButton1pm() {
  var hr13text = $('#h13').val(); 
  h13.textContent = hr13text;
  localStorage.setItem('1pm', h13.textContent);
}
saveButtonEl13.on('click', handleSaveButton1pm);

function handleSaveButton2pm() {
  var hr14text = $('#h14').val(); 
  h14.textContent = hr14text;
  localStorage.setItem('2pm', h14.textContent);
}
saveButtonEl14.on('click', handleSaveButton2pm);

function handleSaveButton3pm() {
  var hr15text = $('#h15').val(); 
  h15.textContent = hr15text;
  localStorage.setItem('3pm', h15.textContent);
}
saveButtonEl15.on('click', handleSaveButton3pm);

function handleSaveButton4pm() {
  var hr16text = $('#h16').val(); 
  h16.textContent = hr16text;
  localStorage.setItem('4pm', h16.textContent);
}
saveButtonEl16.on('click', handleSaveButton4pm);

function handleSaveButton5pm() {
  var hr17text = $('#h17').val(); 
  h17.textContent = hr17text;
  localStorage.setItem('5pm', h17.textContent);
}
saveButtonEl17.on('click', handleSaveButton5pm);

init();

// below with help from classmate greg

var taskTime9 = 9;
if (taskTime9 < currentTime) {
  hour9.addClass('past');
} else if (taskTime9 == currentTime) {
  hour9.addClass('present');
} else if (taskTime9 > currentTime) {
  hour9.addClass('future');
};

var taskTime10 = 10;
if (taskTime10 < currentTime) {
  hour10.addClass('past');
} else if (taskTime10 == currentTime) {
  hour10.addClass('present');
} else if (taskTime10 > currentTime) {
  hour10.addClass('future');
};

var taskTime11 = 11;
if (taskTime11 < currentTime) {
  hour11.addClass('past');
} else if (taskTime11 == currentTime) {
  hour11.addClass('present');
} else if (taskTime11 > currentTime) {
  hour11.addClass('future');
};

var taskTime12 = 12;
if (taskTime12 < currentTime) {
  hour12.addClass('past');
} else if (taskTime12 == currentTime) {
  hour12.addClass('present');
} else if (taskTime12 > currentTime) {
  hour12.addClass('future');
};

var taskTime13 = 13;
if (taskTime13 < currentTime) {
  hour13.addClass('past');
} else if (taskTime13 == currentTime) {
  hour13.addClass('present');
} else if (taskTime13 > currentTime) {
  hour13.addClass('future');
};

var taskTime14 = 14;
if (taskTime14 < currentTime) {
  hour14.addClass('past');
} else if (taskTime14 == currentTime) {
  hour14.addClass('present');
} else if (taskTime14 > currentTime) {
  hour14.addClass('future');
};

var taskTime15 = 15;
if (taskTime15 < currentTime) {
  hour15.addClass('past');
} else if (taskTime15 == currentTime) {
  hour15.addClass('present');
} else if (taskTime15 > currentTime) {
  hour15.addClass('future');
};

var taskTime16 = 16;
if (taskTime16 < currentTime) {
  hour16.addClass('past');
} else if (taskTime16 == currentTime) {
  hour16.addClass('present');
} else if (taskTime16 > currentTime) {
  hour16.addClass('future');
};

var taskTime17 = 17;
if (taskTime17 < currentTime) {
  hour17.addClass('past');
} else if (taskTime17 == currentTime) {
  hour17.addClass('present');
} else if (taskTime17 > currentTime) {
  hour17.addClass('future');
};

