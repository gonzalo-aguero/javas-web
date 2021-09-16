"use strict";
var isHomePage = true;
var isDevsPage = false;
if(location.pathname.includes("/devs")){
    isHomePage = false;
    isDevsPage = true;
}
