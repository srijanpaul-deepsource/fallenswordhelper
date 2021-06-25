import{c as e}from"./collapse-0482f279.js"
import{I as s,a7 as t,b as a,p as r,d as o,aO as c,C as i,Z as n}from"./calfSystem-db2edbef.js"
import{i as f}from"./insertHtmlAfterEnd-f4abe003.js"
import{p as m}from"./parseDateAsTimestamp-099fe353.js"
import{s as l}from"./simpleCheckbox-0c10ca3c.js"
import"./hideElement-7486432a.js"
import"./toggleForce-41b0f4ee.js"
import"./isChecked-5c7617f4.js"
let d,p
function h(e){if(p&&c("PvP Ladder",e.children[1].children[0])){const s=m(i(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(n(t,s),d=s)}}function j(e){return e>1}function b(){d=s(t),p=s("trackLadderReset")
const c="collapseNewsArchive",i=a(o,r)
i.length>2&&(!function(e,s){f(s,l(e))}(c,i[0].rows[2]),e({prefName:c,theTable:i[2],headInd:7,articleTest:j,extraFn:h}))}export default b
//# sourceMappingURL=viewArchive-a6675956.js.map
