import{b as t}from"./batch-5a4fc6b0.js"
import{E as a,I as n,bD as o,B as e}from"./calfSystem-85fa6364.js"
import{o as s}from"./onlineDot-00bdd8cc.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function c(t){const a=o.exec(t.dataset.tipped)
e(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function r(){n("enhanceOnlineDots")&&t([5,3,i(),0,c])}export{r as c,i as g}
//# sourceMappingURL=colouredDots-ec66a88f.js.map
