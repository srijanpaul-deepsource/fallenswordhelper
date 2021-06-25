import{d as r}from"./dialog-a4dfa31d.js"
import{i as o}from"./indexAjaxJson-9619f1ba.js"
import{d as a}from"./daUseItem-61492157.js"
import{e}from"./errorDialog-1238d963.js"
function s(a){return o({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return a(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-4eadd293.js.map
