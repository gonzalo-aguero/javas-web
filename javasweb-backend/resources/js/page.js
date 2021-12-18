"use strict";
function currentPage(){
    let currentPage = {
        isHomePage: true,
        isDevsPage: false
    }
    if(location.pathname.includes("/devs")){
        currentPage.isHomePage = false;
        currentPage.isDevsPage = true;
    }
    return currentPage;
}
module.exports = {
    currentPage
}
