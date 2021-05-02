import{d as r}from"./dialog-aad1c6e1.js"
import{i as a}from"./indexAjaxJson-430cd162.js"
import{d as o}from"./daUseItem-654b871a.js"
import{e}from"./errorDialog-14a51b34.js"
function s(o){return a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-a4028e58.js.map
