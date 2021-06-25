import{m as t,i as e,g as r,aJ as s,as as n,t as a,H as c,C as o}from"./calfSystem-bfc1f6c0.js"
import{c as l}from"./closestTable-7130e192.js"
import{i}from"./insertHtmlBeforeBegin-fac197dc.js"
import"./closest-4542e515.js"
function f(t,e,r){const s=c(e.cells[0]).replace(":","")
return s?(t[s]={ind:r},function(t){return t.cells[1]&&o(t.cells[1])}(e)&&(t[s].value=Number(c(e.cells[1]).replace("+",""))),t):t}function u(t,e,r){return e+((n=t)[s=r]&&n[s].value?n[s].value:0)
var s,n}function m(t){const e=l(t),r=n(e.rows).reduce(f,{}),s=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,t),0)}(r)
var c,o
i((o=e,(c=r).Enhancements?o.rows[c.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${s}&nbsp;</td></tr>`)}function d(n){const a=t()
return e(a,n),r("font",a).filter(s("Bonuses")).forEach(m),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-31999902.js.map
