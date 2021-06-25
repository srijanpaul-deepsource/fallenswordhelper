import{E as t,aJ as n,t as e,b as s,d as a,i as o,I as l}from"./calfSystem-bfc1f6c0.js"
function f(t,n){const e=n.parentNode,f=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${f.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(f,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function i(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(f,!0)),s.filter(n("Enemies")).forEach(e(f,!1))}export default i
//# sourceMappingURL=profileAllyEnemy-f33b0c54.js.map
