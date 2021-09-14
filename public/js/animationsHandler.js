"use strict";
var aboutUsAnimated = false;
const aboutUs = document.getElementById("aboutUs");
const aboutUsTitle = document.querySelector("#aboutUs .text > h1");
const aboutUsText = document.querySelector("#aboutUs .text > p");

var ourServicesAnimated = false;
const ourServices = document.getElementById("ourServices");
const ourServicesTitle = document.querySelector("#ourServices > h2");
const ourServicesItems = document.querySelectorAll("#ourServices .service");

window.addEventListener("scroll", ()=>{
    const y = window.scrollY;
    const anticipation = 200;
    if(aboutUsAnimated === false && y >= (aboutUs.offsetTop - anticipation)){
        aboutUsAnimations();
    }else if(ourServicesAnimated === false && y >= (ourServices.offsetTop - anticipation)){
        ourServicesAnimations();
    }
})

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
        const ms = (i+1)*600;
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
