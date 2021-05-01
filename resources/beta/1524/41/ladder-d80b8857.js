import{c as t}from"./createTr-9308e396.js"
import{I as o,D as s,h as r,A as a,B as n,a6 as e,a7 as i}from"./calfSystem-587dd8d3.js"
import{i as c}from"./interceptSubmit-8814daab.js"
import{o as u}from"./outputFormat-954dc5c7.js"
import"./formToUrl-2c1cc653.js"
function f(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${u(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,a("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(f(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-d80b8857.js.map
