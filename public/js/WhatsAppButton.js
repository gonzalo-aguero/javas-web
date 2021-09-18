"use strict";
function whatsAppButtonInit() {
    let whatsappButton;
    let message;
    let second = 1000;//1000ms
    const link = "https://api.whatsapp.com/send?phone=5493434258605&text=Hola!%20Quisiera%20realizar%20una%20consulta.%F0%9F%98%81";
    whatsappButton = document.createElement("div");
    whatsappButton.id = "WhatsAppButton";
    document.body.appendChild(whatsappButton);
    whatsappButton.innerHTML = `
        <img src="img/icons/whatsapp.svg" alt="WhatsApp" class="animate__animated animate__delay-2s animate__backInUp">
        <span class="message animate__animated animate__backInRight">Háblanos por WhatsApp!</span>
    `;
    message = document.querySelector("#WhatsAppButton > .message");
    setTimeout(()=>{
        message.style.display = "block";//show message
        setTimeout(() => {
            message.classList.remove("animate__backInRight");
            setInterval(() => {
                message.classList.toggle("animate__bounce");
            }, second * 10);
        }, second);
    }, second * 5);
    whatsappButton.addEventListener('click', ()=>{
        location.href = link;
    });
}
