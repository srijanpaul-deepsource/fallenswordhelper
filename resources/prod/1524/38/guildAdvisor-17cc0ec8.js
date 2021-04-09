import{n as t,u as s,v as e,D as a,N as n,H as r,$ as c,m as l,h as i,a as o,t as d,a4 as u,B as f,i as m,y as p,b as v,p as h,c as b,K as g,a9 as j,C}from"./calfSystem-7a1cce43.js"
import{g as y}from"./getMembrList-bfb04e21.js"
import{a as B}from"./addCommas-cec84c43.js"
import{a as w}from"./allthen-8480e63e.js"
import{g as S}from"./guild-6cfdbf69.js"
import{i as D}from"./intValue-ba9b9e5a.js"
import{c as T}from"./createTable-cbb1ed54.js"
import{r as R}from"./replaceChild-300e1396.js"
import{i as k}from"./insertHtmlAfterEnd-c93c0b21.js"
import{l as x}from"./loadDataTables-40abef4b.js"
import"./currentGuildId-c3cf68bc.js"
import"./cmdExport-b5bb530e.js"
import"./indexAjaxJson-48ec5c5d.js"
import"./idb-c572d898.js"
import"./all-edb79f43.js"
function G(s){return t("tfoot",s)}function A(t){return S({subcmd:"advisor",subcmd2:"view",period:t})}function E(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return e=t.cells[s],D(r(e))
var e}))}}function L(t){const s=e(t),r=a("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(E),s:!0}}function M(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(L)}const F=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function N(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function H(t,s){return s[t]?s[t].level:""}function J(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function P(t,s,e){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:F,data:s,deferRender:!0,initComplete:e,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function X(t,s){o(3,d(R,t,s))}function q(t,s,e){const a=l(),n=T({className:"fshDataTable fshXSmall hover"})
return i(a,n),i(n,s),o(3,P,[n,e,d(X,a,t)]),a}function I(t,s,e){return m(t.lastElementChild.lastElementChild,` day ${s},`),e.r}function K(t,s){return(e=s,c(A,M,e)).then(d(I,t,s))
var e}function O(t,s,e){return s+t[e]}function V(t,s,e){return{...s,stats:s.stats.map(d(O,t[e].stats))}}function W(t,s){return t.map(d(V,s))}function _(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function z(t,s){return s.stats.map(d(O,t))}function Q(t,s){return`${t}<td><u>${s}</u></td>`}function U(t,s){const e=s.stats.map(B)
return[N(s.player.name,t),H(s.player.name,t),J(s.player.name,t)].concat(e)}function Y(t,[s,...e]){const a=function(t){return t.slice(1).reduce(W,t[0]).map(_)}(e)
q(t,function(t){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(z,t[0].stats).map(B).reduce(Q,"")}</tr>`})}(a),a.map(d(U,s)))}function Z(t,s){return 0===s?r(t):C(t)}function tt(t,s){const e=n(s.cells,Z)
return e.splice(0,1,N(e[0],t),H(e[0],t),J(e[0],t)),e}function st(t,s){const e=function(t,s){return n(t.rows).slice(1,-1).map(d(tt,s))}(t,s),a=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=G()
i(e,s)
const a=s.cells[0]
return a.className="fshRight",a.setAttribute("colspan","3"),e}(t)
q(t,a,e),function(){const t=g("custombutton",h)
0!==t.length&&k(t[0],`<span> <a href="${j}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}()}function et(t){"weekly"===b.subcmd2?function(t){f('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[y(!1)].concat([1,2,3,4,5,6,7].map(d(K,t)))
w(s,d(Y,t))}(t):y(!1).then(d(st,t))}function at(){if(p())return
const t=v("table",h)[1]
t&&x().then((()=>et(t)))}export default at
//# sourceMappingURL=guildAdvisor-17cc0ec8.js.map
