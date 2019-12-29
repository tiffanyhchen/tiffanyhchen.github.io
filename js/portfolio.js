/*** Main Function ***/
let mosaicData;
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");


$(document).ready(function() {
    loadMosaicData();
});

function loadMosaicData(){
    fetch('./js/projects.json').then(data => data.json()).then(response => {
        mosaicData = response;
        populateMosaic("Featured");
    })
    
}

const addTilt = () => {
    $('.project-box').tilt({
        maxTilt: 8,
        glare: true,
        maxGlare: 0.2,
        scale: 1.03,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: true,
        speed: 200
    });
}

/* Generate select dropdown */
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item. */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list. */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item. */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item. */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        var selected = document.getElementsByClassName("select-selected")[0].innerHTML;
        console.log(selected);
        console.log(mosaicData);
        selected = selected.charAt(0).toUpperCase() + selected.slice(1);
        populateMosaic(selected);
    });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box. */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes. */
document.addEventListener("click", closeAllSelect);

function populateMosaic(selected){
    console.log(selected);
    var filteredProjects = mosaicData.filter(function(project) {
        return project.site_tags.includes(selected)
    });
    console.log(filteredProjects);
    
    var mosaicHTML = "";
    var boxCounter = 1;
    
    for(const project of filteredProjects){
        console.log(project);
        var box = "<div class=\"project-box box-" + boxCounter +"\">";
        box += "<a href=\"" + project.url + ".html\">";
        box += "<img src=\"img/" + project.image + "\"/>";
        box += "<div class=\"project-box-hover\"><p class=\"project-box-title\">" + project.name;
        box += "</p><p class=\"project-box-date\">" + project.tags;
        box += "</p><p class=\"project-box-descrp\">" + project.description + "</p></div></a></div>";
        mosaicHTML += box;
        boxCounter++;
    }
    
    document.getElementById("mosaic").innerHTML = mosaicHTML;
    addTilt();
}
