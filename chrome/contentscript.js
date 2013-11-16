
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

checkbox.addEventListener('click', hnNewTabLinks, false);

// Loops through the links on the page and
// set that target of all external links to "_blank"
// causing them to open in a new tab when clicked
function hnNewTabLinks() {
	
	var i, cb = document.getElementById('newTabCheckbox');

	// Get all the links on the page
	var links = document.getElementsByTagName("a");

	if (cb.checked === true) {

		// Set the status of the checkbox in localStorage
		localStorage.setItem("checkbox_status", true);

		// Loop through all the links on the page and set their target to "_blank"
		// This will make them to open in a new tab when clicked by the user
		for (i = 0; i < links.length; i++) {

			// If the link is an article (conatined in a <td> with .title)
			// Then set its target to "_blank" so it will open in a new tab
			if (links[i].parentNode.className === "title") {
				links[i].setAttribute("target", "_blank");
			}
		}
	} else {

			// Set the status of the checkbox in localStorage
			localStorage.setItem("checkbox_status", false);

			// Loop through all the links on the page make sure there target is empty
			// This will make them to open in the same tab they were clicked from
			for (i = 0; i < links.length; i++) {
				links[i].removeAttribute("target");
			}
		}
}