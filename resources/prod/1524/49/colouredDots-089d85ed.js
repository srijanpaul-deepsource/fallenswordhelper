import{b as t}from"./batch-04c769d2.js"
import{E as a,I as n,bD as o,B as e}from"./calfSystem-2172498b.js"
import{o as s}from"./onlineDot-06d8c9a0.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function c(t){const a=o.exec(t.dataset.tipped)
e(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function r(){n("enhanceOnlineDots")&&t([5,3,i(),0,c])}export{r as c,i as g}
//# sourceMappingURL=colouredDots-089d85ed.js.map
