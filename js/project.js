//window.addEventListener("scroll", function() {
//    var elementTarget = document.getElementById("project-header");
//    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
//    //    console.log(elementTarget);
//    if (window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight - 30)) {
//        console.log(scrollNav);
//        scrollNav.style.visibility = "visible";
//    } else{
//        scrollNav.style.visibility = "hidden";
//    }
//});

var menuVisibility = false;
var pageMenu = document.getElementById("page-menu");
var menuImg = document.getElementById("menu-icon");
var exitIcon = "../img/icons/exit.svg";
var menuIcon = "../img/icons/menu.svg";
pageMenu.addEventListener('click', togglePageMenu);

function togglePageMenu(){
    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
    if(menuVisibility == false){
        show(scrollNav);
        menuImg.src = exitIcon;
        menuVisibility = true;
    } else{
        hide(scrollNav);
        menuImg.src = menuIcon;
        menuVisibility = false;
    }
}

// Show an element
function show(elem) {
	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
function hide(elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
	
};