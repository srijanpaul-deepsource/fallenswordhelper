import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,a0 as c,t as m,N as d,aH as p,aI as f}from"./calfSystem-b3667af8.js"
import{p as g}from"./perfFilter-5b66b249.js"
import{s as l}from"./simpleCheckbox-20ff8122.js"
import"./getArrayByClassName-2345f1a3.js"
import"./getInventoryById-68508d8c.js"
import"./getInventory-6a7f3864.js"
import"./guildStore-f5cf7d1f.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./isChecked-8825c1a8.js"
let b
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,m(j,e,m(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):d(`${p+f}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,c("disableBreakdownPrompts",b)}function v(){t()||(g("composing"),b=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-c587b6bb.js.map
