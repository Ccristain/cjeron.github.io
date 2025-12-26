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

/* SKILL ANIMATION */
const coverText = {
    hardSkillsText: {
        "MS Office": {
            title: "MS Office",
            description: "Proficient in Microsoft Word and Excel for document creation."
        },
        "Web Development": {
            title: "Web Development",
            description: "Skilled in HTML, CSS, and JavaScript for building responsive websites."
        },
        "Graphic Design": {
            title: "Graphic Design",
            description: "Experienced in Canva for creating visual content."
        },
        "2d Animation": {
            title: "2d Animation",
            description: "Knowledgeable in Fundamentals for creating 2D animations."
        },
        "Network Configuration": {
            title: "Network Configuration",
            description: "Understanding of basic network setup and troubleshooting."
        }
    },
    softSkillsText: {
        "Problem Solving": {
            title: "Problem Solving",
            description: "Able to analyze issues and find effective solutions."
        },
        "Time Management": {
            title: "Time Management",
            description: "Efficient in organizing tasks to meet deadlines."
        },
        "Adaptability": {
            title: "Adaptability",
            description: "Flexible and open to change in dynamic environments."
        },
        "Goal Centric": {
            title: "Goal Centric",
            description: "Focused on achieving objectives and delivering results."
        },
        "Attentive": {
            title: "Attentive",
            description: "Paying close attention to details and instructions."
        }
    }
}

const hardSkills = document.querySelectorAll(".a-hardskill");
const softSkills = document.querySelectorAll(".a-softskill");

const hardSkillsCover = document.getElementById("hardskills-cover");
const softSkillsCover = document.getElementById("softskills-cover");

let hardTitle = document.getElementById("hard-title");
let hardDescription = document.getElementById("hard-description");
let softTitle = document.getElementById("soft-title");
let softDescription = document.getElementById("soft-description");

hardSkills.forEach((skill) => {
    skill.addEventListener("mouseover", () => {
        softSkillsCover.style.opacity = "100%";
        softSkillsCover.style.zIndex = "1";
        softTitle.innerText = coverText.hardSkillsText[skill.innerText].title;
        softDescription.innerText = coverText.hardSkillsText[skill.innerText].description;
        })
    skill.addEventListener("mouseout", () => {
        softSkillsCover.style.opacity = "0";
        softSkillsCover.style.zIndex = "-1";
    })
});

softSkills.forEach((skill) => {
    skill.addEventListener("mouseover", () => {
        hardSkillsCover.style.opacity = "100%";
        hardSkillsCover.style.zIndex = "1";
        hardTitle.innerText = coverText.softSkillsText[skill.innerText].title;
        hardDescription.innerText = coverText.softSkillsText[skill.innerText].description;
        })
    skill.addEventListener("mouseout", () => {
        hardSkillsCover.style.opacity = "0";
        hardSkillsCover.style.zIndex = "-1";
    })
});