var aboutUsAnimated;
var aboutUs;
var aboutUsTitle;
var aboutUsText;
var ourServicesAnimated;
var ourServices;
var ourServicesTitle;
var ourServicesItems;
var whyChooseUsAnimated;
var whyChooseUs;
var whyChooseUsTitle;
var whyChooseUsItems;
var footerAnimated;
var footer;
var footerTitle;
var footerItems;
const warnMsg = "This exception can be thrown simply by not being on the home page. In this case ignore it.\n";
const currentPage = require('./page').currentPage();

function init(){
    if(currentPage.isHomePage){
        aboutUsAnimated = false;
        aboutUs = document.getElementById("aboutUs");
        aboutUsTitle = document.querySelector("#aboutUs .text > h2");
        aboutUsText = document.querySelector("#aboutUs .text > p");

        ourServicesAnimated = false;
        ourServices = document.getElementById("ourServices");
        ourServicesTitle = document.querySelector("#ourServices > h2");
        ourServicesItems = document.querySelectorAll("#ourServices .service");

        whyChooseUsAnimated = false;
        whyChooseUs = document.getElementById("whyChooseUs");
        whyChooseUsTitle = document.querySelector("#whyChooseUs .text > h2");
        whyChooseUsItems = document.querySelectorAll("#whyChooseUs .text > p");

        footerAnimated = false;
        footer = document.getElementById("footer");
        footerTitle = document.querySelector("#footer .text h2");
        footerItems = document.querySelectorAll("#footer .text p");
    }else if(currentPage.isDevsPage){
        footerAnimated = false;
        footer = document.getElementById("footer");
        footerTitle = document.querySelector("#footer .text h2");
        footerItems = document.querySelectorAll("#footer .text p");
    }

    window.addEventListener("scroll", scrollEventsHandler);
}

function scrollEventsHandler() {
    const y = window.scrollY;
    const anticipation = 200;
    const footerCondition = !footerAnimated && y >= (footer.offsetTop - 350);
    if(currentPage.isHomePage){
        //Scroll events in the home page.
        try {
            if( !aboutUsAnimated && y >= (aboutUs.offsetTop - anticipation)){
                aboutUsAnimations();
            }else if( !ourServicesAnimated && y >= (ourServices.offsetTop - anticipation)){
                ourServicesAnimations();
            }else if( !whyChooseUsAnimated && y >= (whyChooseUs.offsetTop - anticipation)){
                whyChooseUsAnimations();
            }else if(footerCondition){
                footerAnimations();
            }
        } catch (error) {
            console.warn(warnMsg, error);
        }
    }else if(currentPage.isDevsPage){
        //Scroll events in the devs page.
        try {
            if(footerCondition){
                footerAnimations();
            }
        } catch (error) {
            console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
        }
    }else{
        console.warn("no animations");
    }

}
function aboutUsAnimations(){
    aboutUsTitle.style.display = "block";
    setTimeout(()=>{
        aboutUsText.style.display = "block";
    }, 500);
    aboutUsAnimated = true;
}
function ourServicesAnimations(){
    ourServicesTitle.style.display = "block";
    ourServicesItems.forEach( (item, i) => {
        const ms = (i+1)*300;
        setTimeout(()=>{
            let counter = 0;
            let opacity = 0;
            const interval = setInterval(()=>{
                if(opacity < 1){
                    opacity = opacity + (counter / 50);
                    item.style.opacity = opacity;
                    counter++;
                }else{
                    clearInterval(interval);
                }
            },50);
        }, ms);
    });
    ourServicesAnimated = true;
}
function whyChooseUsAnimations(){
    whyChooseUsTitle.style.opacity = 1;
    whyChooseUsTitle.classList.add("animate__fadeInLeftBig");
    setTimeout(()=>{
        whyChooseUsItems.forEach( (item, i) => {
            const ms = (i+1)*300;
            setTimeout(()=>{
                item.style.opacity = 1;
                (i+1)%2 === 1
                ? item.classList.add("animate__fadeInRight")
                : item.classList.add("animate__fadeInLeft");
            }, ms);
        });
    }, 500);
    whyChooseUsAnimated = true;
}
function footerAnimations(){
    footerTitle.style.opacity = 1;
    footerTitle.classList.add("animate__slow", "animate__fadeIn");
    setTimeout(()=>{
        footerItems.forEach( (item, i) => {
            const ms = (i+1)*300;
            setTimeout(()=>{
                item.style.opacity = 1;
                item.classList.add("animate__slow", "animate__fadeIn");
            }, ms);
        });
    }, 500);
    footerAnimated = true;
}
module.exports = {
    init
}
