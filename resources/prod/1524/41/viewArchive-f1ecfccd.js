import{c as e}from"./collapse-1b383d66.js"
import{I as s,a6 as t,b as a,p as r,d as o,aH as i,C as c,_ as n}from"./calfSystem-030d7057.js"
import{i as m}from"./insertHtmlAfterEnd-255ee2cd.js"
import{p as d}from"./parseDateAsTimestamp-66a4394c.js"
import{s as l}from"./simpleCheckbox-ff78be49.js"
import"./hideElement-9426b096.js"
import"./toggleForce-a6b1c4fe.js"
import"./isChecked-0eb4a700.js"
let p,f
function h(e){if(f&&i("PvP Ladder",e.children[1].children[0])){const s=d(c(e.children[1].children[2]).replace("Posted: ",""))
s>p&&(n(t,s),p=s)}}function b(e){return e>1}function j(){p=s(t),f=s("trackLadderReset")
const i="collapseNewsArchive",c=a(o,r)
c.length>2&&(!function(e,s){m(s,l(e))}(i,c[0].rows[2]),e({prefName:i,theTable:c[2],headInd:7,articleTest:b,extraFn:h}))}export default j
//# sourceMappingURL=viewArchive-f1ecfccd.js.map
