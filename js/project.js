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
pageMenu.addEventListener("click", togglePageMenu);

function togglePageMenu(){
    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
    if(menuVisibility == false){
        scrollNav.style.visibility = "visible";
        menuVisibility = true;
    } else{
        scrollNav.style.visibility = "hidden";
        menuVisibility = false;
    }
}