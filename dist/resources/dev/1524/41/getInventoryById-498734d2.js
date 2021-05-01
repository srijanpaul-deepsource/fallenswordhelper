import{g as e}from"./getInventory-8cee8712.js"
function n(e,n){return n.is_in_st&&(e.fshHasST=!0),e[n.inv_id]=n,e}function t(e){return{items:e.items.reduce(n,{}),folders:e.folders}}function r(){return e().then(t)}export{r as g}
//# sourceMappingURL=getInventoryById-498734d2.js.map
