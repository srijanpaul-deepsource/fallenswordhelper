import{c as t}from"./createTr-441f2d04.js"
import{I as o,D as s,h as r,A as n,B as e,a7 as a,a8 as i}from"./calfSystem-c464cb1d.js"
import{i as c}from"./interceptSubmit-ce385627.js"
import{o as f}from"./outputFormat-ec830642.js"
import"./formToUrl-89e002dc.js"
function u(){const t=o(a)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,n("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",e(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-45962173.js.map
