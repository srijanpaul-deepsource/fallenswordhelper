import{u as n,v as o,H as t,x as i,q as s,$ as a,ab as c,z as m,at as e,c as r,j as p,I as u,av as f,ax as l,a8 as g,a0 as d}from"./calfSystem-186455ab.js"
import{g as h}from"./getArrayByClassName-0545a3cf.js"
function b(n){const o=n.match(/ETA: (\d+)h (\d+)m (\d+)s/)
return{time_remaining:60*Number(o[1])*60+60*Number(o[2])+Number(o[3])}}function x(n){const i=o(n),s=h("composing-potion",i)
if(0===s.length)return{s:!1}
return{r:{max_potions:s.length,potions:h("composing-potion-time",i).map(t).filter((n=>n.endsWith("s"))).map(b)},s:!0}}function y(){return n({cmd:"composing"}).then(x)}function N(){return i(s({cmd:"composing"},{subcmd:"view"}))}const _=`<li class="notification"><a href="${e}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function j(){c(m("notifications"),_)}function v(n){return n.time_remaining}function A(){j(),d(f,!0)}function C(n){n.potions.length!==n.max_potions?A():function(n){const o=Math.min.apply(null,n.map(v))
o>0?(d(f,!1),d(l,g+1e3*o)):A()}(n.potions)}function $(n){n.s&&C(n.r)}function q(){const n=u(l)
n&&g<n||a(N,y).then($)}function w(){"composing"!==r.cmd&&p()&&(u(f)?j():q())}export default w
//# sourceMappingURL=injectComposeAlert-e4b1b03b.js.map
