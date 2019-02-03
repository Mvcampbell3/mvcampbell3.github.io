const about = document.getElementById("about");
const projects = document.getElementById("projects");
const home = document.getElementById("home");
const contactForm = document.getElementById("contactForm");
const contact = document.getElementById("contact");
const lilArray = [home, contact, projects];
let areUSerious = 0;
const subBtn = document.getElementById("subBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

home.addEventListener("click", function (e) {
    e.preventDefault();
    newPanel(this.dataset.which);
});
contact.addEventListener("click", function (e) {
    e.preventDefault();
    newPanel(this.dataset.which);
});
projects.addEventListener("click", function (e) {
    e.preventDefault();
    newPanel(this.dataset.which);
});

subBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("submit button pressed");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
})

function newPanel(element) {
    let open = lilArray.filter((li) => li.dataset.show === "true");

    if (open[0].dataset.which !== element) {
        areUSerious = 0;
        let change = lilArray.filter((li) => li.dataset.which === element);
        open[0].dataset.show = "false";
        change[0].dataset.show = "true";
        let tagOut = document.getElementById(open[0].dataset.which);
        let tagIn = document.getElementById(change[0].dataset.which);
        console.log(change);
        fadeOut(tagOut);
        setTimeout(() => fadeIn(tagIn), 750);
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
    let timer = setInterval(function () {
        if (x >= 1) {
            clearInterval(timer);
            id.style.opacity = 1;

        } else {
            x = x + 0.05;
            id.style.opacity = x;
        }
    }, 25)
}

function fadeOut(id) {
    let x = 1;
    let timer = setInterval(function () {
        if (x <= 0) {
            clearInterval(timer);
            id.style.display = "none";
        } else {
            x = x - 0.05;
            id.style.opacity = x;
        }
    }, 25)
}

fadeIn(about);

// Project Page

const pictures = [].slice.call(document.querySelectorAll(".projectPic"));

const srcPics = pictures.map((pic) => pic.src);

console.log(pictures);
console.log(srcPics)

pictures.forEach(function (picture) {
    picture.addEventListener("click", function () {
        console.log(this.src);
        console.log(this.dataset.info);
        setDisplay(this.src, this.dataset.info, this.dataset.web)
    })
})

const projectInfo = [
    "This is the classic Rock Paper Scissors Game. This is a multiplay game which utilizes the firebase authentication and database technologies. Simply create a user and join in on the fun.", 
    "This is an ongoing personal project which has its beginnings back when I just started to learn web design. It started as a simple way to learn arrays and is turning into a fully finished game.", 
    "This game is a variation of the classic Hangman game with a theme of the movie Princess Bride. This was used as a learning tool for jQuery. I also learned quite a bit about how to add audio to a website. Good luck storming the castle.", 
    "Here we have a rpg version of the classic fighting game Street Fighter 2. Choose your fighter and try and defeat all comers. There is a path to success for each fighter, Have Fun!", 
    "Liri is a Node application that will deliever information to the user based on if they want to learn about a movie, song, or upcoming live shows. Follow instruction in the README on the github page to learn more."
];

const webDestinations = [
    "https://mvcampbell3.github.io/RPS-Multiplayer/",
    "https://mvcampbell3.github.io/Word-Guess-Game/",
    "https://mvcampbell3.github.io/unit-4-game/"
]

const gitDestinations = [
    "https://github.com/Mvcampbell3/RPS-Multiplayer",
    "https://github.com/Mvcampbell3/Yahtzee",
    "https://github.com/Mvcampbell3/Word-Guess-Game",
    "https://github.com/Mvcampbell3/unit-4-game",
    "https://github.com/Mvcampbell3/liri-node-app"
]

let webGo = "";
let gitGo = "";

function setDisplay(src, which, web) {
    document.getElementById("displayPic").setAttribute("src", src);
    const content = document.getElementById("projectContent");
    const title = document.getElementById("projectName");
    const websiteBtn = document.getElementById("web");
    const gitBtn = document.getElementById("git");

    switch (web) {
        case "true":
            websiteBtn.style.display = "inline-block";
            break;
        case "false":
            websiteBtn.style.display = "none";
            break;
        default:
            console.log("web switch not working");
    }

    switch (which) {
        case "rock":
            console.log("rock description");
            content.innerText = projectInfo[0];
            title.innerText = "Rock Paper Scissors";
            websiteBtn.setAttribute("href", webDestinations[0]);
            gitBtn.setAttribute("href", gitDestinations[0]);
            break;
        case "yahtzee":
            console.log("yahtzee description");
            content.innerText = projectInfo[1];
            gitBtn.setAttribute("href", gitDestinations[1]);
            title.innerText = "Yahtzee";
            break;
        case "word":
            console.log("word description");
            content.innerText = projectInfo[2];
            title.innerText = "Word Guess Game";
            websiteBtn.setAttribute("href", webDestinations[1]);
            gitBtn.setAttribute("href", gitDestinations[2]);
            break;
        case "sf":
            console.log("sf description");
            content.innerText = projectInfo[3];
            title.innerText = "Street Fighter 2";
            websiteBtn.setAttribute("href", webDestinations[2]);
            gitBtn.setAttribute("href", gitDestinations[3]);
            break;
        case "liri":
            console.log("liri description");
            content.innerText = projectInfo[4];
            title.innerText = "Liri";
            gitBtn.setAttribute("href", gitDestinations[4]);
            break;
        default:
            console.log("setDisplay switch not working")
    }
}
