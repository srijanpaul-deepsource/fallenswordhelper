import{c as t}from"./createTr-51d0374c.js"
import{I as o,D as s,h as r,A as n,B as a,a6 as e,a7 as i}from"./calfSystem-030d7057.js"
import{i as c}from"./interceptSubmit-64615b22.js"
import{o as u}from"./outputFormat-954dc5c7.js"
import"./formToUrl-63e8d7e7.js"
function f(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${u(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,n("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",a(f(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-b50e6b55.js.map
