// add current date to the header area
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

const saveBtn = $('.saveBtn');
const clearBtn = $('.clearBtn');

// when click on clear button, information is deleted
clearBtn.on('click', function () {
	localStorage.clear();
	location.reload();
	return false;
});

function timeTracker() {
	//get current hour
	let timeNow = moment().hour();