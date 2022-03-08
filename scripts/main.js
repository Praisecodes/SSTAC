window.onscroll = () => {
    if(this.scrollY > 100){
        document.querySelector(".up").style.display = "block";
    }
    else{
        document.querySelector(".up").style.display = "none";
    }
}

const openNav = () => {
    document.querySelector(".mobile-nav-wrap").style.display = "block";
    document.body.style.overflow = "hidden";
}

const closeNav = () => {
    document.querySelector(".mobile-nav-wrap").style.display = "none";
    document.body.style.overflow = "auto";
}

const scrollUp = () => {
    document.querySelector(".contact-top").scrollIntoView({
        behavior: "smooth"
    });
}