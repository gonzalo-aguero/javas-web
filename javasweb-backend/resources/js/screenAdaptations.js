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
    coverPage.style.marginTop = headerHeight + "px";
}
module.exports = {
    init
}
