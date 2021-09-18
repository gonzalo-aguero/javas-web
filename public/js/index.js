"use strict";
var isHomePage = true;
var isDevsPage = false;
window.onload = ()=>{
    if(location.pathname.includes("/devs")){
        isHomePage = false;
        isDevsPage = true;
    }
    screenAdaptationsInit();
    animationsHandlerInit();
    menuInit();
    whatsAppButtonInit();
};

