import{d as r}from"./dialog-f292fc18.js"
import{i as o}from"./indexAjaxJson-81a9c061.js"
import{d as a}from"./daUseItem-d1a1d6ff.js"
import{e}from"./errorDialog-d1013a6b.js"
function s(a){return o({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return a(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-76966577.js.map
