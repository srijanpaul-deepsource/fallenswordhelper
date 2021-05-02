import{c as t}from"./createTr-d215a0c0.js"
import{I as o,D as s,h as r,A as a,B as n,a7 as e,a8 as i}from"./calfSystem-4b6b865d.js"
import{i as c}from"./interceptSubmit-4558b472.js"
import{o as u}from"./outputFormat-7a7558ec.js"
import"./formToUrl-c8d32791.js"
function f(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${u(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,a("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(f(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-4d38bdf8.js.map
