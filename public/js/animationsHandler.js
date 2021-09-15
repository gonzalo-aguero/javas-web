"use strict";
var aboutUsAnimated = false;
const aboutUs = document.getElementById("aboutUs");
const aboutUsTitle = document.querySelector("#aboutUs .text > h1");
const aboutUsText = document.querySelector("#aboutUs .text > p");

var ourServicesAnimated = false;
const ourServices = document.getElementById("ourServices");
const ourServicesTitle = document.querySelector("#ourServices > h2");
const ourServicesItems = document.querySelectorAll("#ourServices .service");

var whyChooseUsAnimated = false;
const whyChooseUs = document.getElementById("whyChooseUs");
const whyChooseUsTitle = document.querySelector("#whyChooseUs .text > h2");
const whyChooseUsItems = document.querySelectorAll("#whyChooseUs .text > p");

var footerAnimated = false;
const footer = document.getElementById("footer");
const footerTitle = document.querySelector("#footer .text h2");
const footerItems = document.querySelectorAll("#footer .text p");

window.addEventListener("scroll", scrollEventsHandler);

function scrollEventsHandler() {
    const y = window.scrollY;
    const anticipation = 200;
    const footerCondition = !footerAnimated && y >= (footer.offsetTop - 350);

    if( !aboutUsAnimated && y >= (aboutUs.offsetTop - anticipation)){
        aboutUsAnimations();
    }else if( !ourServicesAnimated && y >= (ourServices.offsetTop - anticipation)){
        ourServicesAnimations();
    }else if( !whyChooseUsAnimated && y >= (whyChooseUs.offsetTop - anticipation)){
        whyChooseUsAnimations();
    }else if(footerCondition){
        footerAnimations();
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
