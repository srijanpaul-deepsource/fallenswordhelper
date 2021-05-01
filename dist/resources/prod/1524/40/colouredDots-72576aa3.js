import{b as t}from"./batch-735e3bee.js"
import{E as a,I as e,bu as n,B as o}from"./calfSystem-540da563.js"
import{o as s}from"./onlineDot-87712eda.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=n.exec(t.dataset.tipped)
o(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function p(){e("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{p as c,i as g}
//# sourceMappingURL=colouredDots-72576aa3.js.map
