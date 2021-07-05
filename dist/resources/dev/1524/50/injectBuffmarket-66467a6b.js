import{u as s,w as a,x as t,$ as n,D as e,o as c,p as f,f as u,t as i,B as o,v as r}from"./calfSystem-b3667af8.js"
async function m(t){const n=await s({cmd:"buffmarket",subcmd:"buy",id:t}),e=a(n)
return"Request accepted - buffs have automatically been cast."===e?{s:!0}:{s:!1,e:{message:e}}}function p(s){return a={subcmd:"buy",id:s},t({cmd:"buffmarket",...a})
var a}async function d(a,t){t.preventDefault(),o('<div class="fshWaiting">Loading...</div>',a)
const n=Object.fromEntries(new FormData(t.target)),c=r(await s(n)),f=e("#buff-results",c).parentElement.innerHTML
o(f,a)}async function l(s){s.stopPropagation()
const a=s.target.getAttribute("onclick").match(/id=([0-9]+)/)?.[1]
if(a){const t=s.target.parentNode
t.className="fshActionRow",o('<div class="fshSpin"><span class="fshSpinner"></span></div>',t)
const e=await function(s){return n(p,m,s)}(a)
e.s?o('<span class="fshBuffSuccess">Buffs have been applied</span>',t):o(`<span class="fshBuffFail">${e.e.message}</span>`,t)}}function b(s){"INPUT"===s.target.tagName&&"Buy"===s.target.value&&l(s)}function g(){const s=e("#buff-results")
s&&(!function(s){const a=document.forms[0]
u(a,"submit",i(d,s.parentNode))}(s),c(f,b,!0))}export default g
//# sourceMappingURL=injectBuffmarket-66467a6b.js.map
