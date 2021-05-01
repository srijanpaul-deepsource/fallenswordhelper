import{c as e}from"./collapse-7b0b11bf.js"
import{I as s,a7 as t,b as a,p as r,d as o,aK as i,C as c,a0 as n}from"./calfSystem-817ceb25.js"
import{i as m}from"./insertHtmlAfterEnd-3060ec60.js"
import{p as l}from"./parseDateAsTimestamp-0e180583.js"
import{s as f}from"./simpleCheckbox-9d63f5f6.js"
import"./hideElement-9426b096.js"
import"./toggleForce-a6b1c4fe.js"
import"./isChecked-0eb4a700.js"
let p,d
function h(e){if(d&&i("PvP Ladder",e.children[1].children[0])){const s=l(c(e.children[1].children[2]).replace("Posted: ",""))
s>p&&(n(t,s),p=s)}}function b(e){return e>1}function j(){p=s(t),d=s("trackLadderReset")
const i="collapseNewsArchive",c=a(o,r)
c.length>2&&(!function(e,s){m(s,f(e))}(i,c[0].rows[2]),e({prefName:i,theTable:c[2],headInd:7,articleTest:b,extraFn:h}))}export default j
//# sourceMappingURL=viewArchive-f34f5e22.js.map
