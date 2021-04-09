import{m as e,i as t,g as r,au as n,N as s,t as a,H as c,C as o}from"./calfSystem-71efcdd9.js"
import{c as l}from"./closestTable-46dcc06e.js"
import{i}from"./insertHtmlBeforeBegin-589a2148.js"
import"./closest-4ebdb6d3.js"
function u(e,t,r){const n=c(t.cells[0]).replace(":","")
return n?(e[n]={ind:r},function(e){return e.cells[1]&&o(e.cells[1])}(t)&&(e[n].value=Number(c(t.cells[1]).replace("+",""))),e):e}function f(e,t,r){return t+((s=e)[n=r]&&s[n].value?s[n].value:0)
var n,s}function d(e){const t=l(e),r=s(t.rows).reduce(u,{}),n=function(e){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,e),0)}(r)
var c,o
i((o=t,(c=r).Enhancements?o.rows[c.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function m(s){const a=e()
return t(a,s),r("font",a).filter(n("Bonuses")).forEach(d),a.innerHTML}function h(e){e.url.startsWith("fetchitem")&&(e.dataFilter=m)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-d530da31.js.map
