const currentPage = require('./page').currentPage();
function init(){
    console.log("screenAdaptations");
    coverPage();
}
function coverPage(){
    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight;
    const coverPage = document.getElementById("coverPage");
    coverPage.style.height = (window.screen.height - headerHeight) + "px";

    //Margin for the coverPage equal to header height since the header has position:fixed.
    if(currentPage.isDevsPage){
        document.querySelector("section.i0").style.marginTop = headerHeight + "px";
    }else if(currentPage.isHomePage){
        coverPage.style.marginTop = headerHeight + "px";
    }
}
module.exports = {
    init
}
