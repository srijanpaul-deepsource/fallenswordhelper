import{c as e}from"./collapse-0b8ba196.js"
import{I as s,a6 as a,b as t,p as r,d as o,aA as c,C as i,_ as n}from"./calfSystem-fe0ebf32.js"
import{i as m}from"./insertHtmlAfterEnd-2a558ca9.js"
import{p as l}from"./parseDateAsTimestamp-25c526ef.js"
import{s as p}from"./simpleCheckbox-a56939b2.js"
import"./hideElement-2c661b2e.js"
import"./toggleForce-e38cb2b0.js"
import"./isChecked-36c474a7.js"
let f,d
function h(e){if(d&&c("PvP Ladder",e.children[1].children[0])){const s=l(i(e.children[1].children[2]).replace("Posted: ",""))
s>f&&(n(a,s),f=s)}}function b(e){return e>1}function j(){f=s(a),d=s("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r)
i.length>2&&(!function(e,s){m(s,p(e))}(c,i[0].rows[2]),e({prefName:c,theTable:i[2],headInd:7,articleTest:b,extraFn:h}))}export default j
//# sourceMappingURL=viewArchive-b39a30be.js.map
