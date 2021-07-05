import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,Z as c,t as d,N as m,aF as p,aG as g}from"./calfSystem-2172498b.js"
import{p as b}from"./perfFilter-8881694f.js"
import{s as l}from"./simpleCheckbox-b36336fb.js"
import"./getArrayByClassName-c230ba3d.js"
import"./getInventoryById-f4d5c4b7.js"
import"./getInventory-30c0077d.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./isChecked-ecfa0022.js"
let f
const u=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(y,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(b("composing"),f=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-31cb7951.js.map
