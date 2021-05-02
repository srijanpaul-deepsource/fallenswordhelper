import{x as n,q as o,$ as a,ab as i,z as t,aB as s,c,j as f,I as p,aD as m,aF as u,a8 as e,a0 as l}from"./calfSystem-4b6b865d.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function b(n){return n.time_remaining}function h(){g(),l(m,!0)}function x(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(b))
o>0?(l(m,!1),l(u,e+1e3*o)):h()}(n.potions)}function j(n){n.s&&x(n.r)}function y(){const n=p(u)
n&&e<n||a(r).then(j)}function $(){"composing"!==c.cmd&&f()&&(p(m)?g():y())}export default $
//# sourceMappingURL=injectComposeAlert-6fd9c624.js.map
