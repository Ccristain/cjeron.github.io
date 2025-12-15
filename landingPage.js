const navBtn = document.getElementById("nav-btn");
const header = document.getElementById("header");

let isOn = false;

navBtn.addEventListener("click", (e) => {
    if(isOn === true){
        header.style.display = "flex";
        isOn = false;
    }else{
        header.style.display = "none";
        isOn = true;
    }
});

const projectContents = {
    Ournimation: {
        link: "assets/ournimation_pic.png",
        title: "Ournimation",
        caption: "Website project for posting personal animation to help other animator to learn animation styles."
    },TapSpeed: {
        link: "assets/tapspeed_pic.png",
        title: "TapSpeed",
        caption: "HTML5 game where you tap as fast as you can to challenge your motor skills."
    },Portfolio: {
        link: "assets/portfolio.png",
        title: "Personal Portfolio",
        caption: "My personal portfolio website made with HTML, CSS, and JavaScript to showcase my personal data, projects and skills."
    },
};
const eachProject = document.querySelectorAll(".each-project");

for(const each of eachProject){
    let titleCount = Array.from(eachProject).indexOf(each) + 1;
    each.innerHTML = `
    <img src="${loadProjectLink(titleCount)}" alt="wait lang" class="project-photo">
    <p class="project-title">${loadProjectTitle(titleCount)}<p>
    <p class="project-caption">"${loadProjectCaption(titleCount)}"<p>
    `;
}

function loadProjectLink(param){
    switch(param){
        case 1:
            return projectContents.Ournimation.link;
        break;
        case 2:
            return projectContents.TapSpeed.link;
        break;
        case 3:
            return projectContents.Portfolio.link;
        break;
    }
}

function loadProjectTitle(param){
    switch(param){
        case 1:
            return projectContents.Ournimation.title;
        break;
        case 2:
            return projectContents.TapSpeed.title;
        break;
        case 3:
                return projectContents.Portfolio.title;
        break;
    }
}

function loadProjectCaption(param){
    switch(param){
        case 1:
            return projectContents.Ournimation.caption;
        break;
        case 2:
            return projectContents.TapSpeed.caption;
        break;
        case 3:
                return projectContents.Portfolio.caption;
        break;
    }
}