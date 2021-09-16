"use strict";
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
var homeEvents = true;//Home page scroll events are working.
var devsEvents = true;//Devs page scroll events are working.
const warnMsg = "This exception can be thrown simply by not being on the home page. In this case ignore it.\n";

try {
    aboutUsAnimated = false;
    aboutUs = document.getElementById("aboutUs");
    aboutUsTitle = document.querySelector("#aboutUs .text > h1");
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
} catch (error) {
    console.warn(warnMsg, error);
}

window.addEventListener("scroll", scrollEventsHandler);

function scrollEventsHandler() {
    const y = window.scrollY;
    const anticipation = 200;
    const footerCondition = !footerAnimated && y >= (footer.offsetTop - 350);
    if(homeEvents){
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
            homeEvents = false;
            console.warn(warnMsg, error);
        }
    }else if(devsEvents){
        //Scroll events in the devs page.
        try {
            if(footerCondition){
                footerAnimations();
            }
        } catch (error) {
            devsEvents = false;
            console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
        }
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
