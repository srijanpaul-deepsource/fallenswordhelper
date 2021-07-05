import{c as e}from"./collapse-d674b9be.js"
import{I as a,a9 as s,b as t,p as r,d as o,aQ as c,C as i,a0 as d}from"./calfSystem-9ab64478.js"
import{i as n}from"./insertHtmlAfterEnd-1cda96b6.js"
import{p as m}from"./parseDateAsTimestamp-caf8e72d.js"
import{s as l}from"./simpleCheckbox-7ced9047.js"
import"./hideElement-3021ab25.js"
import"./toggleForce-d61da182.js"
import"./isChecked-ecfa0022.js"
let p,f
function h(e){if(f&&c("PvP Ladder",e.children[1].children[0])){const a=m(i(e.children[1].children[2]).replace("Posted: ",""))
a>p&&(d(s,a),p=a)}}function b(e){return e>1}function j(){p=a(s),f=a("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r)
i.length>2&&(!function(e,a){n(a,l(e))}(c,i[0].rows[2]),e({prefName:c,theTable:i[2],headInd:7,articleTest:b,extraFn:h}))}export default j
//# sourceMappingURL=viewArchive-2b22ff80.js.map
