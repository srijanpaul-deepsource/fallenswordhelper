import{g as a,bT as i,C as n,c as t,c8 as o,c9 as s}from"./calfSystem-9ab64478.js"
import{i as c}from"./insertHtmlAfterEnd-1cda96b6.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function l(){a("li",i).forEach(e)}export default l
//# sourceMappingURL=injectJoinAllLink-3a0caf4a.js.map
