"use strict";
const imageDialog=document.getElementById("image-dialog");
const infoDialog=document.getElementById("info-dialog");
document.querySelectorAll("[data-image]").forEach(button=>button.addEventListener("click",()=>{
document.getElementById("large-image").src=button.dataset.image;
document.getElementById("large-image").alt=button.dataset.caption;
document.getElementById("large-caption").textContent=button.dataset.caption;
imageDialog.showModal();
}));
document.querySelectorAll("[data-plan]").forEach(link=>link.addEventListener("click",()=>{
if(typeof window.fbq==="function")window.fbq("track","InitiateCheckout",{content_name:link.dataset.plan==="starter"?"Faith & Signs Starter":"Faith & Signs Complete",content_type:"product"});
}));
const policies={terms:["Use of materials","The kit is delivered as digital PDF files. Do not resell or redistribute the files. Check the terms supplied with your purchase for permitted use."],privacy:["Privacy","This page uses the Meta Pixel to measure visits and clicks to checkout for advertising. Meta may process browser, device and interaction data. Payments and purchase information are handled by Kiwify under its own privacy policy."],refund:["Purchase & support","Purchases are processed by Kiwify. Check refund conditions at checkout and use the seller contact and purchase access instructions in your Kiwify confirmation email."]};
document.querySelectorAll("[data-policy]").forEach(button=>button.addEventListener("click",()=>{const p=policies[button.dataset.policy];document.getElementById("info-title").textContent=p[0];document.getElementById("info-text").textContent=p[1];infoDialog.showModal();}));
document.querySelectorAll("dialog").forEach(dialog=>{dialog.querySelector(".close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});});
