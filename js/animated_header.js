window.addEventListener("scroll", ()=> {
    var header = this.document.querySelector(".header");
    var menu = this.document.querySelector(".menu");
    var logo_img = this.document.getElementById('menu-logo');
    var scroll = window.scrollY;

    if(scroll > 10){
        header.classList.add("scroll-down");
        menu.classList.add("scroll-down");
        logo_img.src="../img/Alternative logo FUT REDUCIDO Blanco.svg";
    }else{//Cualquier otro caso
        header.classList.remove("scroll-down");
        menu.classList.remove("scroll-down");
        logo_img.src="../img/Alternative logo FUT REDUCIDO.svg";
    }
})