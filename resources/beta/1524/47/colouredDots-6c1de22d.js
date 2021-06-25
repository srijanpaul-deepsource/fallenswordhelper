import{b as t}from"./batch-ecccc095.js"
import{E as e,I as a,bD as n,B as o}from"./calfSystem-db2edbef.js"
import{o as s}from"./onlineDot-1f0e9c19.js"
function i(){return e('#pCC a[data-tipped*="Last Activity"]')}function c(t){const e=n.exec(t.dataset.tipped)
o(s({min:e[3],hour:e[2],day:e[1]}),t.parentNode.previousElementSibling)}function r(){a("enhanceOnlineDots")&&t([5,3,i(),0,c])}export{r as c,i as g}
//# sourceMappingURL=colouredDots-6c1de22d.js.map
