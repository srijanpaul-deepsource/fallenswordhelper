import{c as t}from"./createTr-e1e496d4.js"
import{I as o,D as s,h as a,A as r,B as n,a6 as e,a7 as i}from"./calfSystem-15b00143.js"
import{i as c}from"./interceptSubmit-a16f18a6.js"
import{o as f}from"./outputFormat-7a7558ec.js"
import"./formToUrl-d1bb7512.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-74cb5f38.js.map
