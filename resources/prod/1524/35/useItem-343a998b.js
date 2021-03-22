import{d as r}from"./dialog-bd85dd64.js"
import{i as o}from"./indexAjaxJson-a9fbc5f9.js"
import{d as e}from"./daUseItem-c593464f.js"
import{e as s}from"./errorDialog-f7744f6f.js"
function t(e){return o({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return e(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-343a998b.js.map
