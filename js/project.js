var menuVisibility = false;
var pageMenu = document.getElementById("page-menu");
var menuImg = document.getElementById("menu-icon");
var exitIcon = "../img/icons/exit.svg";
var menuIcon = "../img/icons/menu.svg";
pageMenu.addEventListener('click', togglePageMenu);
window.addEventListener("resize", checkBoxShadows);

function checkBoxShadows(){
    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
    var pageNav = document.getElementById("page-nav");
    if(getViewportWidth() > 1150 ){
        pageNav.style.boxShadow = "none";
        scrollNav.style.boxShadow = "none";
    } else{
        if (menuVisibility){
            scrollNav.style.boxShadow = "0 2px 4px 0 rgba(152,152,152,0.50)";
            pageNav.style.boxShadow = "none";
        } else{
            pageNav.style.boxShadow = "0 2px 4px 0 rgba(152,152,152,0.50)";
            scrollNav.style.boxShadow = "none";
        }
    }
    console.log("resize")
}

function togglePageMenu(){
    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
    if(menuVisibility == false){
        show(scrollNav);
        menuImg.src = exitIcon;
    } else{
        hide(scrollNav);
        menuImg.src = menuIcon;
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
    

    if(getViewportWidth() <= 1150){
        var pageNav = document.getElementById("page-nav");
        pageNav.style.boxShadow = "none";
        elem.style.boxShadow = "0 2px 4px 0 rgba(152,152,152,0.50)";
    }

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);
    
    menuVisibility = true;
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
        if(getViewportWidth() <= 1150){
            elem.style.boxShadow = "none";
            var pageNav = document.getElementById("page-nav");
            pageNav.style.boxShadow = "0 2px 4px 0 rgba(152,152,152,0.50)";
        }

	}, 350);
    
    menuVisibility = false;
};

function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}