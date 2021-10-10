var mobileMenu;
var mainMenu;
var logoAndTitle;
var openMenuButton;
var closeMenuButton;
var header;
var coverPage;
var hash;
function init(){
    mobileMenu = window.screen.width > 960 ? false : true;
    mainMenu = document.querySelector("#mainNavigation > ul");
    logoAndTitle = document.querySelectorAll("#siteIdentity > img, #siteIdentity h2");
    openMenuButton = document.getElementById("openMenu");
    closeMenuButton = document.getElementById("closeMenu");
    header = document.getElementById("header");
    coverPage = document.getElementById("coverPage");
    hash = window.location.hash;

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
};

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
        case '#_hello':
            element = document.getElementById('hello');
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_aboutUs":
            element = document.getElementById("aboutUs");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_services":
            element = document.getElementById("services");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_projects":
            element = document.getElementById("ourProjects");
            elementY = element.offsetTop;
            y = elementY - 100;
            break;
        case "#_contact":
            element = document.getElementById("contact");
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
module.exports = {
    init
}
