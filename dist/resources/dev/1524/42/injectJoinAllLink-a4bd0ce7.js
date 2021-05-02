import{g as a,bN as i,C as n,c as t,bY as o,bZ as s}from"./calfSystem-4b6b865d.js"
import{i as c}from"./insertHtmlAfterEnd-e7d8b6bb.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function l(){a("li",i).forEach(e)}export default l
//# sourceMappingURL=injectJoinAllLink-a4bd0ce7.js.map
