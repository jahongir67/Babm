const btn = document.getElementById("kurslar");
const box = document.getElementById("fanlar");

function openn(){
    box.classList.toggle("open");
    btn.classList.toggle("activ");
}

btn.addEventListener("click", openn);