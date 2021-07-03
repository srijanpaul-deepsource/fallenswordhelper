import{x as n,q as o,$ as a,ad as i,z as t,aH as s,c,j as f,I as p,aJ as m,aL as u,aa as e,a0 as l}from"./calfSystem-01849445.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(m,!0)}function j(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(m,!1),l(u,e+1e3*o)):x()}(n.potions)}function y(n){n.s&&j(n.r)}function $(){const n=p(u)
n&&e<n||a(r).then(y)}function _(){"composing"!==c.cmd&&f()&&(p(m)?g():$())}export default _
//# sourceMappingURL=injectComposeAlert-9ffbb46e.js.map
