const currentPage = require('./page').currentPage();
function init(){
    if(currentPage.isHomePage){
        try{
            aboutUsSVG();
            ourServicesSVG();
            whyChooseUsSVG();
            footerSVG();
        } catch (error) {
            console.warn("This exception can be thrown simply by not being on the home page. In this case ignore it.\n", error);
        }
    }else if(currentPage.isDevsPage){
        try{
            devSectionsSVG();
            footerSVG();
        } catch (error) {
            console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
        }
    }
}
/**
 * Resize the SVG triangles and polygon in the "About Us" section according to the width of the screen.
 */
function aboutUsSVG(){
    const svg1 = document.querySelector("#aboutUs svg.i0");//Yellow Triangle.
    const svg2 = document.querySelector("#aboutUs svg.i1");//White Polygon.
    const svg3 = document.querySelector("#aboutUs svg.i2");//White Triangle.
    const polygon1 = svg1.querySelector("polygon");//Yellow Triangle.
    const polygon2 = svg2.querySelector("polygon");//White Polygon.
    const polygon3 = svg3.querySelector("polygon");//White Triangle.
    const width = window.screen.width;

    if(width > 790){
        //Yellow Triangle.
        svg1.setAttribute('width', 600);
        svg1.setAttribute('height', 300);
        polygon1.setAttribute('points', '0,0 600,0 300,300');

        //White Polygon.
        svg2.setAttribute('width', 900);
        svg2.setAttribute('height', 500);
        polygon2.setAttribute('points', '300,0 900,0 900,500 200,500 0,300');

        //White Triangle.
        svg3.setAttribute('width', 250);
        svg3.setAttribute('height', 250);
        polygon3.setAttribute('points', '0,0 250,250 0,250');
    }else{
        //Yellow Triangle.
        svg1.setAttribute('width', 250);
        svg1.setAttribute('height', 250);
        polygon1.setAttribute('points', '50,0 250,0 150,250');

        //White Polygon.
        svg2.setAttribute('width', 400);
        svg2.setAttribute('height', 500);
        polygon2.setAttribute('points', '100,0 400,0 400,500 100,500 0,250');

        //White Triangle.
        svg3.setAttribute('width', 200);
        svg3.setAttribute('height', 250);
        polygon3.setAttribute('points', '0,0 100,250 0,250');
    }
}
/**
 * Resize the SVG triangles in the "Our services" section according to the width of the screen.
 */
function ourServicesSVG(){
    const svg1 = document.querySelector("#ourServices svg.i0");//Black triangle
    const polygon1 = svg1.querySelector("polygon");
    const svg2 = document.querySelector("#ourServices svg.i1");//Yellow triangle
    const polygon2 = svg2.querySelector("polygon");
    const width = window.screen.width;
    let size;

    if(width > 1100){
        size = 300;
    }else if(width > 850){
        size = 250;
    }else if(width > 400){
        size = 200;
    }else{
        size = 150;
    }

    svg1.setAttribute('width', size);
    svg1.setAttribute('height', size);
    polygon1.setAttribute('points', `0,0 ${size},${size} 0,${size}`);

    svg2.setAttribute('width', size);
    svg2.setAttribute('height', size);
    polygon2.setAttribute('points', `0,0 ${size},${size} ${size},0`);
}
/**
 * Resize the SVG triangle and polygon in the "Why choose us" section according to the width of the screen.
 */
function whyChooseUsSVG(){
    const svg1 = document.querySelector("#whyChooseUs svg.i0");//Yellow polygon
    const polygon1 = svg1.querySelector("polygon");
    const svg2 = document.querySelector("#whyChooseUs svg.i1");//White triangle
    const polygon2 = svg2.querySelector("polygon");
    const width = window.screen.width;
    let svg2Size;

    if(width > 700){
        svg1.setAttribute('width', 500);
        svg1.setAttribute('height', 500);
        polygon1.setAttribute('points', '0,0 100,0 500,350 350,500 0,500');
        svg2Size = 300;
    }else{
        svg1.setAttribute('width', 500);
        svg1.setAttribute('height', 700);
        polygon1.setAttribute('points', '0,0 500,650, 500,700 0,700');
        svg2Size = 250;
    }

    svg2.setAttribute('width', svg2Size);
    svg2.setAttribute('height', svg2Size);
    polygon2.setAttribute('points', `${svg2Size},0 ${svg2Size},${svg2Size} 0,${svg2Size}`);
}
/**
 * Resize the SVG triangle in the footer according to the width of the screen.
 */
function footerSVG(){
    const svg = document.querySelector("#footer svg.i0");//Black triangle
    const polygon1 = svg.querySelector("polygon");
    const width = window.screen.width;
    let svgWidth;

    if(width > 550){
        svgWidth = 650;
    }else{
        svgWidth = 200;
    }

    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', '500');
    polygon1.setAttribute('points', `${svgWidth},0 ${svgWidth},500 0,500`);
}
function devSectionsSVG(){
    const SVGs = document.querySelectorAll("section > svg");
    let originalSize = 300;
    let newSize = 250;
    const width = window.screen.width;
    if(width > 960){
        newSize = 300;
    }else if(width > 750){
        newSize = 250;
    }else if(width > 450){
        newSize = 200;
    }else{
        newSize = 150;
    }

    SVGs.forEach( svg => {
        svg.setAttribute('width', newSize);
        svg.setAttribute('height', newSize);
        const polygon = svg.querySelector("polygon");
        let points = polygon.getAttribute('points');
        points = points.replaceAll(originalSize, newSize);
        polygon.setAttribute('points', points);
    });
}
module.exports = {
    init
}
