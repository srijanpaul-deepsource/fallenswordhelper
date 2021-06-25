import{d as r}from"./dialog-a4dfa31d.js"
import{i as a}from"./indexAjaxJson-acd1a794.js"
import{d as o}from"./daUseItem-126bd318.js"
import{e}from"./errorDialog-1238d963.js"
function s(o){return a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-d34e48f5.js.map
