let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector("#nav-bar");

menu.onclick = () =>{
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    navbar.classList.remove("active");
}

const scrollContainer = document.querySelector("body");

scrollContainer.addEventListener("whell", function(e){

        console.log(e)
    if(e.whell > 0){
        this.scrollLeft- 50;
    }else{
        this.scrollLeft+50;
    }

}, {passive: true});

let darkmode = document.querySelector("#darkmode");
 
darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active")
    } else{
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active")
    }
}
