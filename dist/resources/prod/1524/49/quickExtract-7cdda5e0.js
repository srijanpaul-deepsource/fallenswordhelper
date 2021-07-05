import{y as t,B as e,h as n,o as i,p as s,t as r,a_ as a,z as o,aA as c,bv as f}from"./calfSystem-2172498b.js"
import{c as d}from"./createTable-514c5663.js"
import{d as l}from"./daUseItem-84f213fd.js"
import{e as m}from"./eventHandler5-f81b785a.js"
import{g as u}from"./getInventory-30c0077d.js"
import{j as p}from"./jConfirm-3f8c1d69.js"
import{j as h,o as b}from"./jsonFail-71aa7a15.js"
import{s as x}from"./selfIdIs-c9f5839c.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
let _,y,v,j,I,$,g
function E(t,e){return e.inv_id===t}function S(t){return`${t.amount} x ${f[t.type]}`}function k(t,e){var n
h(e,g)||(!function(t){const e=v.findIndex(r(E,t))
e>=0&&v.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(S).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',g))}function w(t){l(t).then(r(k,t))}function A(t){const n=$[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function D(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(A,t))}function F(t){return function(t){return I&&-1!==t.folder_id}(t)||function(t){return!j&&t.is_in_st}(t)}function q(t,e){return F(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=$[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${y}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!v)return
$=v.reduce(q,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a($).reduce(C,""),e(t,_),g=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){y=t.player_id,v=t.items.filter(Y),M()}function O(){j=!j,M()}function R(){I=!I,M()}function T(t){return t.id.startsWith("fshExtr")}function z(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),_=d({width:"100%"}),n(a,_),j=!0,I=!0,i(a,m([[x("fshInSt"),O],[x("fshInMain"),R],[T,D]])),u().then(H)}export default z
//# sourceMappingURL=quickExtract-7cdda5e0.js.map
