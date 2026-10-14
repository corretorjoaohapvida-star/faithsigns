"use strict";
const imageDialog=document.getElementById("image-dialog");
const infoDialog=document.getElementById("info-dialog");
document.querySelectorAll("[data-image]").forEach(button=>button.addEventListener("click",()=>{
const image=document.getElementById("large-image");image.src=button.dataset.image;image.alt=button.dataset.caption;
document.getElementById("large-caption").textContent=button.dataset.caption;
document.getElementById("full-size-link").href=button.dataset.image;
imageDialog.showModal();
}));
document.querySelectorAll("[data-plan]").forEach(link=>link.addEventListener("click",()=>{
const name=link.dataset.plan;const plan=window.FAITH_SIGNS_CONFIG.plans[name];
if(typeof window.fbq==="function")window.fbq("track","InitiateCheckout",{content_name:name==="starter"?"Faith & Signs Starter":"Faith & Signs Complete",content_type:"product",value:plan.price,currency:"USD"});
}));
const policies={terms:["Use permission","You may print the downloaded files for one household or one local church campus and share printed materials within that group. Do not resell, publicly repost or redistribute the digital files. Multiple church campuses are not covered by this permission."],privacy:["Privacy","This page uses the Meta Pixel to measure visits and clicks to checkout for advertising. Meta may process browser, device and interaction data. There is no email form on this page. Kiwify handles purchase and payment information under its own policies."],refund:["Purchase & support","Purchases are processed by Kiwify. Review the purchase-specific refund conditions before paying. Use the seller contact information and file-access instructions on your Kiwify purchase receipt or product access page for help."]};
document.querySelectorAll("[data-policy]").forEach(button=>button.addEventListener("click",()=>{const p=policies[button.dataset.policy];document.getElementById("info-title").textContent=p[0];document.getElementById("info-text").textContent=p[1];infoDialog.showModal();}));
document.querySelectorAll("dialog").forEach(dialog=>{dialog.querySelector(".close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
