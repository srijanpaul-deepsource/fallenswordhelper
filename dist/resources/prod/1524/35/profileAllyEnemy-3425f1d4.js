import{E as t,at as e,t as n,b as s,d as a,i as o,I as l}from"./calfSystem-fe0ebf32.js"
function f(t,e){const n=e.parentNode,f=s(a,n.nextElementSibling).length-1
o(n,`<span class="fshBlue">&nbsp;${f.toString()}${function(t,e){return e&&e>=t?`/${e}`:""}(f,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function i(){const s=t("#profileLeftColumn strong")
s.filter(e("Allies")).forEach(n(f,!0)),s.filter(e("Enemies")).forEach(n(f,!1))}export default i
//# sourceMappingURL=profileAllyEnemy-3425f1d4.js.map
