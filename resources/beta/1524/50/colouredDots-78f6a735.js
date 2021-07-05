import{b as t}from"./batch-4134d884.js"
import{E as a,I as e,bE as n,B as o}from"./calfSystem-617f9a5d.js"
import{o as s}from"./onlineDot-3bf4ce45.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=n.exec(t.dataset.tipped)
o(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function c(){e("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{c,i as g}
//# sourceMappingURL=colouredDots-78f6a735.js.map
