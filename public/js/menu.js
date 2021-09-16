const mobileMenu = window.screen.width > 790 ? false : true;
const mainMenu = document.querySelector("#mainNavigation > ul");
const logoAndTitle = document.querySelectorAll("#siteIdentity > img, #siteIdentity h2");
const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");
const header = document.getElementById("header");
const coverPage = document.getElementById("coverPage");
var hash = window.location.hash;

//Margin for the coverPage equal to header height since the header has position:fixed.
if(isDevsPage){
    document.querySelector("section.i0").style.marginTop = header.offsetHeight + "px";
}else if(isHomePage){
    coverPage.style.marginTop = header.offsetHeight + "px";
}
//Only when the mobile menu is applied.
if(mobileMenu){
    mainMenu.style.display = "none";
    mainMenu.classList.add("animate__fadeOutLeftBig");
    openMenuButton.addEventListener("click", toggleMenu);
    closeMenuButton.addEventListener("click", toggleMenu);
}
//Event on clicking on a item of the main menu (main navigation).
mainMenu.querySelectorAll("li").forEach( li => {
    if(mobileMenu){
        li.addEventListener("click", toggleMenu);
    }
    li.addEventListener("click", clickOnMenuItemHandler);
});
//Go to a section when the hash is changed.
window.addEventListener("hashchange",()=>{
    hash = window.location.hash;
    scrollToSection();
});
//Event on clicking on logo or title in header.
logoAndTitle.forEach( element => element.addEventListener("click", ()=>{
    location.hash = "";
    setTimeout(()=> location.hash = "_", 1000);
}));

scrollToSection();
/**
 * Open or close the main menu (only for mobile menu).
 */
function toggleMenu() {
    const currentDisplay = mainMenu.style.display;
    if(currentDisplay === "none"){
        //Open menu
        mainMenu.classList.replace("animate__fadeOutLeftBig", "animate__fadeInLeftBig");
        mainMenu.style.display = "block";
        openMenuButton.style.display = "none";
        closeMenuButton.style.display = "inline-block";
    }else{
        //Close menu
        mainMenu.classList.replace("animate__fadeInLeftBig", "animate__fadeOutLeftBig");
        setTimeout(()=> mainMenu.style.display = "none", 300);
        closeMenuButton.style.display = "none";
        openMenuButton.style.display = "inline-block";
    }
}
function clickOnMenuItemHandler() {
    setTimeout(()=> location.hash = "_", 1000);
}
/**
 * Scroll to a section acording to the url hash.
 */
function scrollToSection() {
    let y = 0;
    let doScroll = true;
    let element;
    let elementY;

    switch (hash) {
        case "#_aboutUs":
            element = document.getElementById("aboutUs");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_ourServices":
            element = document.getElementById("ourServices");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_whyChooseUs":
            element = document.getElementById("whyChooseUs");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_footer":
            element = document.getElementById("footer");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_":
            doScroll = false;
            break;
    }
    if(doScroll){
        scrollTo(0,y);
    }
}
