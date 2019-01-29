let about = document.getElementById("about");
let projects = document.getElementById("projects");
let home = document.getElementById("home");
let contactForm = document.getElementById("contactForm");
let contact = document.getElementById("contact");
let lilArray = [home, contact, projects];
let areUSerious = 0;

home.addEventListener("click", function(e){
    e.preventDefault();
    newPanel(this.dataset.which);
});
contact.addEventListener("click", function(e){
    e.preventDefault();
    newPanel(this.dataset.which);
});
projects.addEventListener("click", function(e){
    e.preventDefault();
    newPanel(this.dataset.which);
});

function newPanel(element) {
    let open = lilArray.filter((li)=>li.dataset.show === "true");

    if (open[0].dataset.which !== element) {
        areUSerious = 0;
        let change = lilArray.filter((li)=>li.dataset.which === element);
        open[0].dataset.show = "false";
        change[0].dataset.show = "true";
        let tagOut = document.getElementById(open[0].dataset.which);
        let tagIn = document.getElementById(change[0].dataset.which);
        console.log(change);
        fadeOut(tagOut);
        setTimeout(()=>fadeIn(tagIn), 750);
    } else {
        console.log("already opened")
        areUSerious++;
        if (areUSerious === 3) {
            alert("IT IS ALEADY ON THE PAGE!!!!!! STOP IT");
            areUSerious = 0;
        }
    }
}

function fadeIn(id) {
    id.style.display = "block";
    id.style.opacity = "0";
    let x = 0;
    let timer = setInterval(function(){
        if (x >=1) {
            clearInterval(timer);
            id.style.opacity = 1;

        } else {
            x = x + 0.05;
            id.style.opacity = x;
        }
    },25)
}

function fadeOut(id) {
    let x = 1;
    let timer = setInterval(function(){
        if (x <=0) {
            clearInterval(timer);
            id.style.display = "none";
        } else {
            x = x - 0.05;
            id.style.opacity = x;
        }
    }, 25)
}

fadeIn(about);