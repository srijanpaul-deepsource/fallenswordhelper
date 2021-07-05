import{x as n,q as a,$ as o,ad as i,z as t,aH as s,c,j as f,I as p,aJ as m,aL as u,aa as e,a0 as l}from"./calfSystem-b3667af8.js"
function r(){return n(a({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(m,!0)}function b(n){n.potions.length!==n.max_potions?x():function(n){const a=Math.min.apply(null,n.map(h))
a>0?(l(m,!1),l(u,e+1e3*a)):x()}(n.potions)}function j(n){n.s&&b(n.r)}function y(){const n=p(u)
n&&e<n||o(r).then(j)}function $(){"composing"!==c.cmd&&f()&&(p(m)?g():y())}export default $
//# sourceMappingURL=injectComposeAlert-aaadf546.js.map
