import{g as a,bR as i,C as n,c as t,c6 as o,c7 as s}from"./calfSystem-2172498b.js"
import{i as c}from"./insertHtmlAfterEnd-ab1f79ab.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function l(){a("li",i).forEach(e)}export default l
//# sourceMappingURL=injectJoinAllLink-26ecbf6b.js.map
