/* CONTACT */
function toShow() {
  const popup = document.getElementById("contact-pop-up");
  popup.classList.toggle("show");
}

/* SKILL ANIMATION */
const coverText = {
  hardSkillsText: {
    "MS Office": {
      title: "MS Office",
      description:
        "Proficient in Microsoft Word and Excel for document creation.",
    },
    "Web Development": {
      title: "Web Development",
      description:
        "Skilled in HTML, CSS, and JavaScript for building responsive websites that are scalable to other screen resolutions and improving Search Engine Optimization using meta tags and semantic HTML.",
    },
    "Graphic Design": {
      title: "Graphic Design",
      description:
        "Experienced in Canva for creating visual content like presentation, posters/ads, and logos.",
    },
    "2d Animation": {
      title: "2d Animation",
      description:
        "Knowledgeable in Fundamentals for creating 2D animations specifically effects animation and character animation. Familiar with animation software like FlipaClip.",
    },
    "Network Configuration": {
      title: "Network Configuration",
      description: "Understanding of basic network setup and troubleshooting.",
    },
  },
  softSkillsText: {
    "Problem Solving": {
      title: "Problem Solving",
      description: "Able to analyze issues and find effective solutions.",
    },
    "Time Management": {
      title: "Time Management",
      description:
        "I am generally efficient in scheduling time for tasks and meeting deadlines.",
    },
    Adaptability: {
      title: "Adaptability",
      description:
        "Flexible and open to change in dynamic environments while mentally at ease.",
    },
    "Goal Centric": {
      title: "Goal Centric",
      description: "Focused on achieving objectives and delivering results.",
    },
    Attentive: {
      title: "Attentive",
      description: "Paying close attention to details and instructions.",
    },
  },
};

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
    softSkillsCover.style.zIndex = "3";
    softTitle.innerText = coverText.hardSkillsText[skill.innerText].title;
    softDescription.innerText =
      coverText.hardSkillsText[skill.innerText].description;
  });
  skill.addEventListener("mouseout", () => {
    softSkillsCover.style.opacity = "0";
    softSkillsCover.style.zIndex = "-1";
  });
});

softSkills.forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    hardSkillsCover.style.opacity = "100%";
    hardSkillsCover.style.zIndex = "1";
    hardTitle.innerText = coverText.softSkillsText[skill.innerText].title;
    hardDescription.innerText =
      coverText.softSkillsText[skill.innerText].description;
  });
  skill.addEventListener("mouseout", () => {
    hardSkillsCover.style.opacity = "0";
    hardSkillsCover.style.zIndex = "-1";
  });
});
