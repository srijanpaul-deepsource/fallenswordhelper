import{m as e,i as t,g as r,aD as n,N as s,t as a,H as o,C as c}from"./calfSystem-587dd8d3.js"
import{c as l}from"./closestTable-a912937d.js"
import{i}from"./insertHtmlBeforeBegin-791898ec.js"
import"./closest-865e9de8.js"
function u(e,t,r){const n=o(t.cells[0]).replace(":","")
return n?(e[n]={ind:r},function(e){return e.cells[1]&&c(e.cells[1])}(t)&&(e[n].value=Number(o(t.cells[1]).replace("+",""))),e):e}function f(e,t,r){return t+((s=e)[n=r]&&s[n].value?s[n].value:0)
var n,s}function d(e){const t=l(e),r=s(t.rows).reduce(u,{}),n=function(e){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,e),0)}(r)
var o,c
i((c=t,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function m(s){const a=e()
return t(a,s),r("font",a).filter(n("Bonuses")).forEach(d),a.innerHTML}function h(e){e.url.startsWith("fetchitem")&&(e.dataFilter=m)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-c8e263b3.js.map
