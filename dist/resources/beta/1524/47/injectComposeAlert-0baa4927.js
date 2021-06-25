import{x as n,q as o,$ as a,ab as i,z as t,aF as s,c,j as f,I as e,aH as p,aJ as m,a8 as u,Z as l}from"./calfSystem-db2edbef.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function b(n){return n.time_remaining}function h(){g(),l(p,!0)}function x(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(b))
o>0?(l(p,!1),l(m,u+1e3*o)):h()}(n.potions)}function j(n){n.s&&x(n.r)}function y(){const n=e(m)
n&&u<n||a(r).then(j)}function $(){"composing"!==c.cmd&&f()&&(e(p)?g():y())}export default $
//# sourceMappingURL=injectComposeAlert-0baa4927.js.map
