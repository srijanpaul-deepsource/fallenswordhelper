import{D as t,a$ as n,t as e,b as s,d as a,i as o,G as l}from"./calfSystem-019de1cf.js"
function i(t,n){const e=n.parentNode,i=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${i.toString()}${function(t,n){return n&&n>=t?"/"+n:""}(i,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}export default function(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(i,!0)),s.filter(n("Enemies")).forEach(e(i,!1))}
//# sourceMappingURL=profileAllyEnemy-8470eca6.js.map
