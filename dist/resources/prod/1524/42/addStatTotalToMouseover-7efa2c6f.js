import{m as e,i as t,g as r,aB as n,N as s,t as a,H as o,C as c}from"./calfSystem-15b00143.js"
import{c as l}from"./closestTable-c9ebe0fe.js"
import{i}from"./insertHtmlBeforeBegin-b9dc166e.js"
import"./closest-9a08f4fa.js"
function f(e,t,r){const n=o(t.cells[0]).replace(":","")
return n?(e[n]={ind:r},function(e){return e.cells[1]&&c(e.cells[1])}(t)&&(e[n].value=Number(o(t.cells[1]).replace("+",""))),e):e}function u(e,t,r){return t+((s=e)[n=r]&&s[n].value?s[n].value:0)
var n,s}function m(e){const t=l(e),r=s(t.rows).reduce(f,{}),n=function(e){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,e),0)}(r)
var o,c
i((c=t,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=e()
return t(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function h(e){e.url.startsWith("fetchitem")&&(e.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-7efa2c6f.js.map
