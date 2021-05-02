import{d as e}from"./dialog-aad1c6e1.js"
import{i as r}from"./indexAjaxJson-9849e745.js"
import{d as a}from"./daUseItem-beeb03a6.js"
import{e as o}from"./errorDialog-14a51b34.js"
function s(a){return r({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return a(e).then(o).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-6a59dc22.js.map
