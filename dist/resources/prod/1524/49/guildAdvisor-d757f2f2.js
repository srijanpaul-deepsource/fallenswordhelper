import{n as t,u as s,v as a,D as e,ar as n,H as r,$ as i,m as l,h as c,a as o,t as d,a3 as u,I as f,av as m,aw as p,B as v,i as h,y as b,b as g,p as j,c as y,M as C,aa as A,C as B}from"./calfSystem-2172498b.js"
import{g as w}from"./getMembrList-351d1812.js"
import{a as D}from"./addCommas-1f67a5b9.js"
import{a as S}from"./allthen-f7cedfa7.js"
import{g as k}from"./guild-8b9b510e.js"
import{i as T}from"./intValue-f11572ef.js"
import{c as R}from"./createTable-514c5663.js"
import{r as x}from"./replaceChild-684dfa86.js"
import{i as G}from"./insertHtmlAfterEnd-ab1f79ab.js"
import{l as M}from"./loadDataTables-58c1f40d.js"
import"./currentGuildId-7d9d343b.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./idb-35c610a0.js"
import"./all-bb953856.js"
function E(s){return t("tfoot",s)}function L(t){return k({subcmd:"advisor",subcmd2:"view",period:t})}function F(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return a=t.cells[s],T(r(a))
var a}))}}function I(t){const s=a(t),r=e("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(F),s:!0}}function H(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(I)}const N=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function O(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function W(t,s){return s[t]?s[t].level:""}function J(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function P(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:N,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function X(t,s){o(3,d(x,t,s))}function q(t,s,a){const e=l(),n=R({className:"fshDataTable fshXSmall hover"})
return c(e,n),c(n,s),o(3,P,[n,a,d(X,e,t)]),e}function V(t,s,a){return h(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function _(t,s){return(a=s,i(L,H,a)).then(d(V,t,s))
var a}function z(t,s,a){return s+t[a]}function K(t,s,a){return{...s,stats:s.stats.map(d(z,t[a].stats))}}function Q(t,s){return t.map(d(K,s))}function U(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function Y(t,s){return s.stats.map(d(z,t))}function Z(t,s){return`${t}<td><u>${s}</u></td>`}function tt(t,s){const a=s.stats.map(D)
return[O(s.player.name,t),W(s.player.name,t),J(s.player.name,t)].concat(a)}function st(t,[s,...a]){const e=function(t){return t.slice(1).reduce(Q,t[0]).map(U)}(a)
q(t,function(t){return E({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(Y,t[0].stats).map(D).reduce(Z,"")}</tr>`})}(e),e.map(d(tt,s)))}function at(t){const s=f("betaOptIn")
s&&m("guildAdvisor.injectAdvisorWeekly"),function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[w(!1)].concat([1,2,3,4,5,6,7,8].map(d(_,t)))
S(s,d(st,t))}(t),s&&p("guildAdvisor.injectAdvisorWeekly")}function et(t,s){return 0===s?r(t):B(t)}function nt(t,s){const a=n(s.cells,et)
return a.splice(0,1,O(a[0],t),W(a[0],t),J(a[0],t)),a}function rt(t,s){const a=f("betaOptIn")
a&&m("guildAdvisor.injectAdvisorDaily")
const e=function(t,s){return n(t.rows).slice(1,-1).map(d(nt,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),a=E()
c(a,s)
const e=s.cells[0]
return e.className="fshRight",e.setAttribute("colspan","3"),a}(t)
q(t,r,e),function(){const t=C("custombutton",j)
0!==t.length&&G(t[0],`<span> <a href="${A}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),a&&p("guildAdvisor.injectAdvisorDaily")}function it(){if(b())return
const t=g("table",j)[1]
t&&M().then((()=>function(t){"weekly"===y.subcmd2?at(t):w(!1).then(d(rt,t))}(t)))}export default it
//# sourceMappingURL=guildAdvisor-d757f2f2.js.map
