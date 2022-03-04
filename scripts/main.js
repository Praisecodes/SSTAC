const DisplayAboutBlock = () => {
    document.querySelector(".about-drop").style.display = "block";
}

const CloseBlock = () => {
    document.querySelector(".about-drop").style.display = "none";
}

const DisplayCuBlock = () => {
    document.querySelector(".curriculum-drop").style.display = "block";
}

const CloseCuBlock = () => {
    document.querySelector(".curriculum-drop").style.display = "none";
}

const DisplayEventsBlock = () => {
    document.querySelector(".events-drop").style.display = "block";
}

const CloseEventsBlock = () => {
    document.querySelector(".events-drop").style.display = "none";
}

const DisplayJoinBlock = () => {
    document.querySelector(".join-drop").style.display = "block";
}

const CloseJoinBlock = () => {
    document.querySelector(".join-drop").style.display = "none";
}

const images = [
    "./images/Official Opening.jpg",
    "./images/Students.jpg",
    "./images/SSTAC-building.jpg",
    "./images/site.jpg",
    "./images/Chemistry.jpg"
];

let chk = 0;
setInterval(() => {
    setTimeout(() => {
        document.querySelector(".image").classList.add("fadingOut");
        setTimeout(() => {
            chk++;
            if(chk >= images.length){
                chk=0;
            }
            document.querySelector(".image").src = images[chk];
            setTimeout(()=>{
                document.querySelector(".image").classList.add("fadingOut");
            },0);
        }, 1000);
    }, 1000);
}, 4000);
