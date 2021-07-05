import{y as t,B as e,h as n,o as i,p as s,t as r,a$ as a,z as o,aB as c,bw as d}from"./calfSystem-617f9a5d.js"
import{c as f}from"./createTable-6eb5d32d.js"
import{d as l}from"./daUseItem-5ffa2995.js"
import{e as m}from"./eventHandler5-9d45ebdf.js"
import{g as u}from"./getInventory-b6eae9c2.js"
import{j as p}from"./jConfirm-98c541b6.js"
import{j as h,o as b}from"./jsonFail-cedc6dcb.js"
import{s as x}from"./selfIdIs-c3cce407.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
let y,_,j,v,$,I,g
function E(t,e){return e.inv_id===t}function S(t){return`${t.amount} x ${d[t.type]}`}function k(t,e){var n
h(e,g)||(!function(t){const e=j.findIndex(r(E,t))
e>=0&&j.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(S).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',g))}function w(t){l(t).then(r(k,t))}function D(t){const n=I[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function F(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(D,t))}function q(t){return function(t){return $&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function A(t,e){return q(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=I[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!j)return
I=j.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a(I).reduce(C,""),e(t,y),g=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function B(t){_=t.player_id,j=t.items.filter(Y),M()}function H(){v=!v,M()}function O(){$=!$,M()}function R(t){return t.id.startsWith("fshExtr")}function T(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=f({width:"100%"}),n(a,y),v=!0,$=!0,i(a,m([[x("fshInSt"),H],[x("fshInMain"),O],[R,F]])),u().then(B)}export default T
//# sourceMappingURL=quickExtract-754af89a.js.map
