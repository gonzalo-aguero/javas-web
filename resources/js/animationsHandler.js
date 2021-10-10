var coverPageAnimated;
var coverPage;
var coverPage_logo;
var coverPage_title;
var coverPage_text;
var coverPage_startButton;

var servicesAnimated;
var services;
var services_title;
var services_items;

var aboutUsAnimated;
var aboutUs;
var aboutUs_title;
var aboutUs_items;

var technologiesAnimated;
var technologies;
var technologies_title;
var technologies_items;

var ourProjectsAnimated;
var ourProjects;
var ourProjects_title;
var ourProjects_items;

var workflowAnimated;
var workflow;
var workflow_title;
var workflow_items;

var contactAnimated;
var contact;
var contact_title;
var contact_text;
const currentPage = require('./page').currentPage();
function init(){
    console.log("animationsHandler");

    if(currentPage.isHomePage){
        coverPageAnimated = false;
        coverPage = document.getElementById("coverPage");
        coverPage_logo = document.querySelector('#coverPageText > img');
        coverPage_title = document.querySelector('#coverPageText > h1');
        coverPage_text = document.querySelector('#coverPageText > p');
        coverPage_startButton = document.getElementById('startButton');
        coverPage_startButton.addEventListener('click', start);

        servicesAnimated = false;
        services = document.getElementById('services');
        services_title = document.getElementById('servicesTitle');
        services_items = document.querySelectorAll('.services .service');

        aboutUsAnimated = false;
        aboutUs = document.getElementById('aboutUs');
        aboutUs_title = document.getElementById('aboutUsTitle');
        aboutUs_items = document.querySelectorAll('#aboutUs .blocks .block');

        technologiesAnimated = false;
        technologies = document.getElementById('technologies');
        technologies_title = document.querySelector('#technologies > h3');
        technologies_items = document.querySelectorAll('#technologies > ul > li');

        ourProjectsAnimated = false;
        ourProjects = document.getElementById('ourProjects');
        ourProjects_title = document.getElementById('ourProjectsTitle');
        ourProjects_items = document.querySelectorAll('#ourProjects .projects .project');

        workflowAnimated = false;
        workflow = document.getElementById('workflow');
        workflow_title = document.getElementById('workflowTitle');
        workflow_items = document.querySelectorAll('#workflow ul li');

        contactAnimated = false;
        contact = document.getElementById('contact');
        contact_title = document.getElementById('contactTitle');
        contact_text = document.querySelector('#contact > p');
    }else if(currentPage.isDevsPage){

    }
    coverPageAnim();
    window.addEventListener("scroll", scrollEventsHandler);
}
function scrollEventsHandler() {
    const y = window.scrollY;//Current 'Y' location.
    const anticipation = 250;
    if(currentPage.isHomePage){
        //Scroll events in the home page.
        try {
            if( !coverPageAnimated && y >= (coverPage.offsetTop - anticipation)){
                coverPageAnim();
            }else if( !servicesAnimated && y >= (services.offsetTop - anticipation)){
                servicesAnim();
            }else if( !aboutUsAnimated && y >= (aboutUs.offsetTop - anticipation)){
                aboutUsAnim();
            }else if( !technologiesAnimated && y >= (technologies.offsetTop - anticipation)){
                technologiesAnim();
            }else if( !ourProjectsAnimated && y >= (ourProjects.offsetTop - anticipation)){
                ourProjectsAnim();
            }else if( !workflowAnimated && y >= (workflow.offsetTop - anticipation)){
                workflowAnim();
            }else if( !contactAnimated && y >= (contact.offsetTop - anticipation)){
                contactAnim();
            }
        } catch (error) {
            console.warn(warnMsg, error);
        }
    }else if(currentPage.isDevsPage){
        //Scroll events in the devs page.
        try {
            //empty
        } catch (error) {
            console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
        }
    }else{
        console.warn("no animations");
    }
}
function start(){
    window.location.hash = '#_hello';
    setTimeout(()=> location.hash = "_", 1000);
}
function coverPageAnim(){
    let counter = 1;
    const interval = setInterval(()=>{
        if(counter > 4){
            clearInterval(interval);
        }else{
            switch (counter) {
                case 1:
                    coverPage_logo.classList.add('animate__fadeIn');
                    coverPage_logo.style.opacity = 1;
                    break;
                case 2:
                    coverPage_title.classList.add('animate__fadeIn');
                    coverPage_title.style.opacity = 1;
                    break;
                case 3:
                    coverPage_text.classList.add('animate__fadeIn');
                    coverPage_text.style.opacity = 1;
                    break;
                case 4:
                    coverPage_startButton.classList.add('animate__fadeIn');
                    coverPage_startButton.style.opacity = 1;
                break;
                default:
                    break;
            }
        }
        counter++;
    },300);
    coverPageAnimated = true;
}
function servicesAnim(){
    services_title.style.opacity = 1;
    services_title.classList.add('animate__fadeIn');
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter >= services_items.length){
            clearInterval(interval);
            return;
        }
        services_items[counter].style.opacity = 1;
        services_items[counter].classList.add('animate__fadeIn');
        counter++;
    },500);
    servicesAnimated = true;
}
function aboutUsAnim(){
    aboutUs_title.style.opacity = 1;
    aboutUs_title.classList.add('animate__fadeIn');
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter >= aboutUs_items.length){
            clearInterval(interval);
            return;
        }
        aboutUs_items[counter].style.opacity = 1;
        aboutUs_items[counter].classList.add('animate__flipInY');
        counter++;
    },500);
    aboutUsAnimated = true;
}
function technologiesAnim(){
    technologies_title.style.opacity = 1;
    technologies_title.classList.add('animate__fadeIn');
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter >= technologies_items.length){
            clearInterval(interval);
            return;
        }
        technologies_items[counter].style.opacity = 1;
        technologies_items[counter].classList.add('animate__flipInX');
        counter++;
    },150);
    technologiesAnimated = true;
}
function ourProjectsAnim(){
    ourProjects_title.style.opacity = 1;
    ourProjects_title.classList.add('animate__fadeIn', 'animate__slower');
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter >= ourProjects_items.length){
            clearInterval(interval);
            return;
        }
        ourProjects_items[counter].style.opacity = 1;
        ourProjects_items[counter].classList.add('animate__fadeIn', 'animate__slow');
        counter++;
    },500);
    ourProjectsAnimated = true;
}
function workflowAnim(){
    workflow_title.style.opacity = 1;
    workflow_title.classList.add('animate__fadeIn');
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter >= workflow_items.length){
            clearInterval(interval);
            return;
        }

        const animation = (counter === 0 || counter === 2) ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig';
        workflow_items[counter].style.opacity = 1;
        workflow_items[counter].classList.add(animation);
        counter++;
    },500);
    workflowAnimated = true;
}
function contactAnim(){
    contact_title.style.opacity = 1;
    contact_title.classList.add('animate__fadeIn');
    setTimeout(()=>{
        contact_text.style.opacity = 1;
        contact_text.classList.add('animate__fadeIn');
    },750);
    contactAnimated = true;
}
module.exports = {
    init
}
