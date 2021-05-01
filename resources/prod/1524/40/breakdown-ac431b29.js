import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,_ as c,t as d,O as m,ax as p,ay as g}from"./calfSystem-540da563.js"
import{p as f}from"./perfFilter-84cff053.js"
import{s as l}from"./simpleCheckbox-8a40d72d.js"
import"./getArrayByClassName-58503ecd.js"
import"./getInventoryById-5e8bd7cf.js"
import"./getInventory-653c2c3b.js"
import"./cmdExport-a330f27a.js"
import"./indexAjaxJson-8f18f901.js"
import"./isChecked-a9c3c9fe.js"
let u
const b=[]
function y(e){e.hide()}function h(e,t){e.animate({height:0},500,t)}function x(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(h,e,d(y,e)))}function j(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(x,5e3)}function k(e){0!==e.error?j(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(b).then(k)}function C(e){u&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==b.length?w():j("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=b.indexOf(t);-1===o?b.push(t):b.splice(o,1)}function P(){u=!u,c("disableBreakdownPrompts",u)}function v(){t()||(f("composing"),u=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-ac431b29.js.map
