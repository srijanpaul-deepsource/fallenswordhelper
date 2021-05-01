import{b as e,r as t}from"./render-fb780632.js"
import{I as s,z as o,c as i,o as r,f as a,m as n,h as l,i as c,p as u,B as f,a0 as m}from"./calfSystem-c464cb1d.js"
import{c as b}from"./createInput-8ffbb09b.js"
import{i as p}from"./insertTextBeforeEnd-6301c804.js"
import{t as d}from"./testQuant-8befe201.js"
import"./roundToString-2195a730.js"
import"./numberIsNaN-2764ce9c.js"
import"./playerName-c64906b6.js"
import"./toLowerCase-d053e281.js"
import"./testRange-84753860.js"
let h,g,w,B
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],j=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function v(e,t){return e.replace(t[0],t[1])}function y(e,t){return t.reduce(v,e)}function k(){const e=d(B.value)
e&&(h=e,m("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=y(e,N)
return"guild"===i.cmd&&(t=y(t,j)),t}(g.value),s=t(e)
f(s||e,w)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===i.cmd&&(e="hall"===i.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),w=n({className:"fshBioPreview fshBioInner"}),l(t,w),l(g.parentNode,t)}(),"profile"===i.cmd&&c(u,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
B=b({min:1,max:99,type:"number",value:h}),l(e,B),p(e," Lines ")
const t=b({className:"custombutton",value:"Update Rows To Show",type:"button"})
r(t,k),l(e,t),l(u,e)}(),g.rows=h,"profile"===i.cmd&&r(g.parentNode,e),a(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-0c5d9a24.js.map
