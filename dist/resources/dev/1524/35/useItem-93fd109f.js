import{d as r}from"./dialog-bd85dd64.js"
import{i as e}from"./indexAjaxJson-d4ea205b.js"
import{d as o}from"./daUseItem-efd2f584.js"
import{e as s}from"./errorDialog-f7744f6f.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-93fd109f.js.map
