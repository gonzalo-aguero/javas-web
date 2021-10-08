"use strict";
// require('./bootstrap');
const screenAdaptations = require('./screenAdaptations');
const animationsHandler = require('./animationsHandler');
const menu = require('./menu');
const whatsappButton = require('./WhatsAppButton');

window.onload = ()=>{
    screenAdaptations.init();
    animationsHandler.init();
    menu.init();
    whatsappButton.init();
};


