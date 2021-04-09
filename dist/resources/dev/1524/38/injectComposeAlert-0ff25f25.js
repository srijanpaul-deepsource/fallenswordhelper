import{x as n,q as o,$ as a,ab as i,z as s,as as t,c,j as f,I as p,au as u,aw as e,a8 as m,a0 as l}from"./calfSystem-d56087e1.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${t}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(s("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(u,!0)}function b(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(u,!1),l(e,m+1e3*o)):x()}(n.potions)}function j(n){n.s&&b(n.r)}function w(){const n=p(e)
n&&m<n||a(r).then(j)}function y(){"composing"!==c.cmd&&f()&&(p(u)?g():w())}export default y
//# sourceMappingURL=injectComposeAlert-0ff25f25.js.map
