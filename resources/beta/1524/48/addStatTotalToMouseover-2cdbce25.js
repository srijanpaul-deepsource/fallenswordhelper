import{m as t,i as e,g as r,aJ as a,as as s,t as n,H as o,C as c}from"./calfSystem-8af1dca2.js"
import{c as l}from"./closestTable-b818f80a.js"
import{i}from"./insertHtmlBeforeBegin-aa0d2ad7.js"
import"./closest-3a475e96.js"
function f(t,e,r){const a=o(e.cells[0]).replace(":","")
return a?(t[a]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[a].value=Number(o(e.cells[1]).replace("+",""))),t):t}function u(t,e,r){return e+((s=t)[a=r]&&s[a].value?s[a].value:0)
var a,s}function m(t){const e=l(t),r=s(e.rows).reduce(f,{}),a=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(n(u,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${a}&nbsp;</td></tr>`)}function d(s){const n=t()
return e(n,s),r("font",n).filter(a("Bonuses")).forEach(m),n.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-2cdbce25.js.map
