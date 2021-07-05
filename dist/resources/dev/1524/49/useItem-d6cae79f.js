import{d as r}from"./dialog-f1cd510f.js"
import{i as e}from"./indexAjaxJson-b31a9d3b.js"
import{d as o}from"./daUseItem-94ec6cfd.js"
import{e as a}from"./errorDialog-e8577c9a.js"
function s(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-d6cae79f.js.map
