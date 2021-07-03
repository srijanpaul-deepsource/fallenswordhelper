import{u as a,w as s,x as t,$ as n,D as e,o as c,p as f,f as u,t as i,B as o,v as r}from"./calfSystem-8af1dca2.js"
async function m(t){const n=await a({cmd:"buffmarket",subcmd:"buy",id:t}),e=s(n)
return"Request accepted - buffs have automatically been cast."===e?{s:!0}:{s:!1,e:{message:e}}}function p(a){return s={subcmd:"buy",id:a},t({cmd:"buffmarket",...s})
var s}async function d(s,t){t.preventDefault(),o('<div class="fshWaiting">Loading...</div>',s)
const n=Object.fromEntries(new FormData(t.target)),c=r(await a(n)),f=e("#buff-results",c).parentElement.innerHTML
o(f,s)}async function l(a){a.stopPropagation()
const s=a.target.getAttribute("onclick").match(/id=([0-9]+)/)?.[1]
if(s){const t=a.target.parentNode
t.className="fshActionRow",o('<div class="fshSpin"><span class="fshSpinner"></span></div>',t)
const e=await function(a){return n(p,m,a)}(s)
e.s?o('<span class="fshBuffSuccess">Buffs have been applied</span>',t):o(`<span class="fshBuffFail">${e.e.message}</span>`,t)}}function b(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&l(a)}function g(){const a=e("#buff-results")
a&&(!function(a){const s=document.forms[0]
u(s,"submit",i(d,a.parentNode))}(a),c(f,b,!0))}export default g
//# sourceMappingURL=injectBuffmarket-439620ef.js.map
