import{n as t,u as s,v as e,D as a,at as n,H as r,$ as i,m as c,h as l,a as o,t as d,a5 as u,I as f,ax as m,ay as p,B as v,i as h,y as b,b as g,p as j,c as y,M as C,ac as A,C as B}from"./calfSystem-b3667af8.js"
import{g as D}from"./getMembrList-1d170c53.js"
import{a as w}from"./addCommas-b66fde4c.js"
import{a as S}from"./allthen-2ff5fddb.js"
import{g as k}from"./guild-d8974bcd.js"
import{i as T}from"./intValue-76dfee09.js"
import{c as x}from"./createTable-e47cc154.js"
import{r as R}from"./replaceChild-e14935e5.js"
import{i as G}from"./insertHtmlAfterEnd-b696788c.js"
import{l as M}from"./loadDataTables-ad74b274.js"
import"./currentGuildId-01980e74.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./idb-22dd2687.js"
import"./all-9b215cd1.js"
function E(s){return t("tfoot",s)}function L(t){return k({subcmd:"advisor",subcmd2:"view",period:t})}function F(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return e=t.cells[s],T(r(e))
var e}))}}function I(t){const s=e(t),r=a("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(F),s:!0}}function H(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(I)}const N=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function O(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function W(t,s){return s[t]?s[t].level:""}function J(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function P(t,s,e){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:N,data:s,deferRender:!0,initComplete:e,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function X(t,s){o(3,d(R,t,s))}function q(t,s,e){const a=c(),n=x({className:"fshDataTable fshXSmall hover"})
return l(a,n),l(n,s),o(3,P,[n,e,d(X,a,t)]),a}function V(t,s,e){return h(t.lastElementChild.lastElementChild,` day ${s},`),e.r}function _(t,s){return(e=s,i(L,H,e)).then(d(V,t,s))
var e}function z(t,s,e){return s+t[e]}function K(t,s,e){return{...s,stats:s.stats.map(d(z,t[e].stats))}}function Q(t,s){return t.map(d(K,s))}function U(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function Y(t,s){return s.stats.map(d(z,t))}function Z(t,s){return`${t}<td><u>${s}</u></td>`}function tt(t,s){const e=s.stats.map(w)
return[O(s.player.name,t),W(s.player.name,t),J(s.player.name,t)].concat(e)}function st(t,[s,...e]){const a=function(t){return t.slice(1).reduce(Q,t[0]).map(U)}(e)
q(t,function(t){return E({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(Y,t[0].stats).map(w).reduce(Z,"")}</tr>`})}(a),a.map(d(tt,s)))}function et(t){const s=f("betaOptIn")
s&&m("guildAdvisor.injectAdvisorWeekly"),function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[D(!1)].concat([1,2,3,4,5,6,7,8].map(d(_,t)))
S(s,d(st,t))}(t),s&&p("guildAdvisor.injectAdvisorWeekly")}function at(t,s){return 0===s?r(t):B(t)}function nt(t,s){const e=n(s.cells,at)
return e.splice(0,1,O(e[0],t),W(e[0],t),J(e[0],t)),e}function rt(t,s){const e=f("betaOptIn")
e&&m("guildAdvisor.injectAdvisorDaily")
const a=function(t,s){return n(t.rows).slice(1,-1).map(d(nt,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=E()
l(e,s)
const a=s.cells[0]
return a.className="fshRight",a.setAttribute("colspan","3"),e}(t)
q(t,r,a),function(){const t=C("custombutton",j)
0!==t.length&&G(t[0],`<span> <a href="${A}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),e&&p("guildAdvisor.injectAdvisorDaily")}function it(){if(b())return
const t=g("table",j)[1]
t&&M().then((()=>function(t){"weekly"===y.subcmd2?et(t):D(!1).then(d(rt,t))}(t)))}export default it
//# sourceMappingURL=guildAdvisor-9c767e68.js.map
