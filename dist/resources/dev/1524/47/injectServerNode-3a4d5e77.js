import{z as t,E as n,aJ as e,l as o,C as s,m as a,h as r,B as i}from"./calfSystem-bfc1f6c0.js"
import{t as c}from"./toggleForce-41b0f4ee.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=s(n.children[7]),o=a({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${e}`})
r(t,o)}(t,e),function(t,n){const e=n.children[3].innerHTML,o=t.children[0]
i(`Online: ${e}`,o)}(t,e),c(n.parentNode,!0))}function f(){const s=t("topbanner-stats"),a=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&o("topbanner-stats-hidden",t))&&n})(s,a)&&l(s,a)}export default f
//# sourceMappingURL=injectServerNode-3a4d5e77.js.map
