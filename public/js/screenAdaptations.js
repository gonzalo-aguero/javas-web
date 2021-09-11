"use strict";
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
ourServicesSVG();
whyChooseUsSVG();
