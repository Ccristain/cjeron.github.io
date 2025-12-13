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


const eachProject = document.querySelectorAll(".each-project");

for(const each of eachProject){
    const counter = 0;
    each.innerHTML = `
    <img src="#" alt="wait lang" class="project-photo">
    <p class="project-title">Lorem Ipsum<p>
    <p class="project-caption">"Website project for posting sakuga."<p>
    `;
}