import{d as r}from"./dialog-a4dfa31d.js"
import{i as o}from"./indexAjaxJson-bf365b96.js"
import{d as e}from"./daUseItem-c696811e.js"
import{e as a}from"./errorDialog-1238d963.js"
function s(e){return o({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return e(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-80915e5f.js.map
