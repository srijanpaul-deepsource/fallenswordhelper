import{m as t,i as e,g as r,av as n,N as s,t as a,H as o,C as c}from"./calfSystem-d56087e1.js"
import{c as l}from"./closestTable-c8a39f92.js"
import{i}from"./insertHtmlBeforeBegin-dad066ca.js"
import"./closest-4ebdb6d3.js"
function u(t,e,r){const n=o(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(o(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function d(t){const e=l(t),r=s(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function m(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(d),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=m)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-0593690e.js.map
