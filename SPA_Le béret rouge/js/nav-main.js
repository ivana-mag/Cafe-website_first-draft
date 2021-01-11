burgerToggle ={
burgerBtn: null,
burger_nav: null,
nav_links: [],

init(){
    this.burgerBtn.addEventListener('click', ()=>{
    this.burger_nav.classList.toggle('nav-active');

    //animate the links

    this.nav_links.forEach((link, index) => {
        // console.log(index)
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 1s ease forwards ${index/5 + 1}s`
        }
    });

    });
}
}