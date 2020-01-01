window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("project-header");
    var scrollNav = document.getElementsByClassName("scroll-nav")[0];
    //    console.log(elementTarget);
    if (window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight - 30)) {
        console.log(scrollNav);
        scrollNav.style.visibility = "visible";
    } else{
        scrollNav.style.visibility = "hidden";
    }
});