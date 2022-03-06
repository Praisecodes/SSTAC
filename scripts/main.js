window.onscroll = () => {
    if(this.scrollY > 100){
        document.querySelector(".up").style.display = "block";
    }
    else{
        document.querySelector(".up").style.display = "none";
    }
}

document.querySelector(".up").addEventListener('click', () => {
    document.querySelector(".contact-top").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".mobile-btn").addEventListener('click', () => {
    document.querySelector(".mobile-nav-wrap").style.display = "block";
    document.body.style.overflow = "hidden";
});

document.querySelector(".closeNav").addEventListener('click', () => {
    document.querySelector(".mobile-nav-wrap").style.display = "none";
    document.body.style.overflow = "auto";
});