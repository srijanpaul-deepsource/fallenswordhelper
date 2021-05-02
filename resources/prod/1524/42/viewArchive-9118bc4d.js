import{c as e}from"./collapse-965323e9.js"
import{I as s,a6 as a,b as t,p as r,d as o,aH as i,C as c,_ as n}from"./calfSystem-15b00143.js"
import{i as f}from"./insertHtmlAfterEnd-778c206f.js"
import{p as m}from"./parseDateAsTimestamp-41bbfb83.js"
import{s as l}from"./simpleCheckbox-7ef91a41.js"
import"./hideElement-30ade5f0.js"
import"./toggleForce-f06995aa.js"
import"./isChecked-cf65e779.js"
let p,d
function h(e){if(d&&i("PvP Ladder",e.children[1].children[0])){const s=m(c(e.children[1].children[2]).replace("Posted: ",""))
s>p&&(n(a,s),p=s)}}function j(e){return e>1}function b(){p=s(a),d=s("trackLadderReset")
const i="collapseNewsArchive",c=t(o,r)
c.length>2&&(!function(e,s){f(s,l(e))}(i,c[0].rows[2]),e({prefName:i,theTable:c[2],headInd:7,articleTest:j,extraFn:h}))}export default b
//# sourceMappingURL=viewArchive-9118bc4d.js.map
