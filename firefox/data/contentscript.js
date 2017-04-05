
var pagetop = document.getElementsByClassName('pagetop')[0];
var newElement = ' | ' +
	'<span id="insertedSpan">' +
	'<input id="newTabCheckbox" type="checkbox" />' +
	' open links in new tab</span>';

// Insert the element into the page
pagetop.insertAdjacentHTML('beforeend', newElement);

var checkbox = document.getElementById('newTabCheckbox');

// Set CSS styles for the new element
checkbox.style.verticalAlign = 'middle';
checkbox.style.padding = '0';
checkbox.style.margin = '0';
checkbox.style.lineHeight = '16px';

// Check localStorage to see if the checkbox was checked before this page load
var checkbox_status = localStorage.getItem("checkbox_status");

// If the checkbox was checked before this page load
// check it, and set the links to open in a new tab
if (checkbox_status === "true") {
	checkbox.setAttribute("checked", "true");
	hnNewTabLinks();
}

checkbox.addEventListener('change', hnNewTabLinks, false);

// Loops through the links on the page and
// set that target of all external links to "_blank"
// causing them to open in a new tab when clicked
function hnNewTabLinks(e) {
	var i, cb = document.getElementById('newTabCheckbox');

	// Get all the links on the page
	var links = document.getElementsByTagName("a");

	// Set the status of the checkbox in localStorage
	localStorage.setItem("checkbox_status", cb.checked);

	// Iterate through all the links on the page and if checkbox is checked, modify target to "_blank"
	for (i = 0; i < links.length; i++) {
		// We only want to target article links
		if (links[i].parentNode.className !== "title") continue;

		if (cb.checked) {
			links[i].setAttribute("target", "_blank");
		} else {
			links[i].removeAttribute("target");
		}
	}
}