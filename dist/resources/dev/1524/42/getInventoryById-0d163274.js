import{g as n}from"./getInventory-bd8c3f01.js"
function t(n,t){return t.is_in_st&&(n.fshHasST=!0),n[t.inv_id]=t,n}function e(n){return{items:n.items.reduce(t,{}),folders:n.folders}}function r(){return n().then(e)}export{r as g}
//# sourceMappingURL=getInventoryById-0d163274.js.map
