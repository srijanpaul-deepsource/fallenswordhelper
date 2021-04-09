import{c as t}from"./createTr-012a5498.js"
import{I as o,D as s,h as r,A as n,B as a,a7 as e,a8 as i}from"./calfSystem-d56087e1.js"
import{i as c}from"./interceptSubmit-1b6b81ff.js"
import{o as f}from"./outputFormat-60bc549c.js"
import"./formToUrl-becb9cc8.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,n("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",a(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-42bc5b1f.js.map
