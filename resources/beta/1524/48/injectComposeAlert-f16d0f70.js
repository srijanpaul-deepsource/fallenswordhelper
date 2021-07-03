import{x as n,q as o,$ as a,ac as i,z as t,aG as s,c,j as f,I as p,aI as m,aK as u,a9 as e,_ as l}from"./calfSystem-8af1dca2.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(m,!0)}function _(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(m,!1),l(u,e+1e3*o)):x()}(n.potions)}function j(n){n.s&&_(n.r)}function y(){const n=p(u)
n&&e<n||a(r).then(j)}function I(){"composing"!==c.cmd&&f()&&(p(m)?g():y())}export default I
//# sourceMappingURL=injectComposeAlert-f16d0f70.js.map
