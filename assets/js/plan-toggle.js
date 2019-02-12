// Add Files Here
// var toggleBtn = document.getElementsByClassName('.plan-toggle');
// var btnOnce = (toggleBtn.getAttribute('data-toggle')[0] === 'one-time');
// var btnAnnually = (toggleBtn.getAttribute('data-toggle')[0] === 'annually');


document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
	// if (!event.target.matches('.plan-toggle')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);

}, false);