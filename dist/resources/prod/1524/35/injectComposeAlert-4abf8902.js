import{u as n,v as o,H as t,x as s,q as i,$ as a,aa as c,z as e,aq as m,c as r,j as u,I as f,as as p,au as l,a7 as g,_ as d}from"./calfSystem-fe0ebf32.js"
import{g as h}from"./getArrayByClassName-7dbc6c3a.js"
function b(n){const o=n.match(/ETA: (\d+)h (\d+)m (\d+)s/)
return{time_remaining:60*Number(o[1])*60+60*Number(o[2])+Number(o[3])}}function _(n){const s=o(n),i=h("composing-potion",s)
if(0===i.length)return{s:!1}
return{r:{max_potions:i.length,potions:h("composing-potion-time",s).map(t).filter((n=>n.endsWith("s"))).map(b)},s:!0}}function x(){return n({cmd:"composing"}).then(_)}function y(){return s(i({cmd:"composing"},{subcmd:"view"}))}const N=`<li class="notification"><a href="${m}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function j(){c(e("notifications"),N)}function q(n){return n.time_remaining}function v(){j(),d(p,!0)}function A(n){n.potions.length!==n.max_potions?v():function(n){const o=Math.min.apply(null,n.map(q))
o>0?(d(p,!1),d(l,g+1e3*o)):v()}(n.potions)}function C(n){n.s&&A(n.r)}function $(){const n=f(l)
n&&g<n||a(y,x).then(C)}function w(){"composing"!==r.cmd&&u()&&(f(p)?j():$())}export default w
//# sourceMappingURL=injectComposeAlert-4abf8902.js.map
