import{c as t}from"./createTr-596ae85b.js"
import{I as o,D as s,h as r,A as n,B as a,a7 as e,a8 as i}from"./calfSystem-817ceb25.js"
import{i as c}from"./interceptSubmit-b5f83dc2.js"
import{o as f}from"./outputFormat-954dc5c7.js"
import"./formToUrl-0f02df3e.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,n("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",a(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-41abed53.js.map
