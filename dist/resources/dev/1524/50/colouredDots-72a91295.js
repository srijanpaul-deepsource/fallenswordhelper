import{b as t}from"./batch-1a09a87c.js"
import{E as a,I as n,bF as o,B as e}from"./calfSystem-b3667af8.js"
import{o as s}from"./onlineDot-38946dd7.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=o.exec(t.dataset.tipped)
e(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function c(){n("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{c,i as g}
//# sourceMappingURL=colouredDots-72a91295.js.map
