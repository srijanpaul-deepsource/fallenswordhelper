import{a as n}from"./allthen-d828bb84.js"
import{c as t}from"./closestTr-627423b9.js"
import{al as a,E as e,e as s,t as r,av as o,d as c,x as i,q as f,y as d,S as l,I as u,aw as m,ax as p}from"./calfSystem-8af1dca2.js"
import{s as v,g as h}from"./idb-30d71a28.js"
import{i as b}from"./intValue-9eb5015a.js"
import{c as g}from"./changeMinMax-6a9eb8c2.js"
import{f as x,a as y,m as L,t as M}from"./assets-7b5d479d.js"
import{l as T,p as j}from"./lvlTests-87d82dc1.js"
import{i as _}from"./interceptSubmit-57af03dc.js"
import{l as k}from"./loadDataTables-8a5539c9.js"
import{c as w}from"./currentGuildId-ae75dbfc.js"
import{i as q}from"./isArray-f9d2634e.js"
import{s as E}from"./setTipped-71facd91.js"
function F(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let S,C
function D(){v(x,S)}function N(n,t){S=S||{},S.minLvl=n,S.maxLvl=t,D()}function I(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){g(N,I)}function G(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(S.minLvl),$("#fshMaxLvl").val(S.maxLvl),I()}function J(n){S=S||{},S.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function O(n,t){return!S||function(n,t){const a=S.minLvl,e=S.maxLvl,s=b(t[7])
return T(j,s,a,e)}(0,t)}function R(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(y)
!function(n){const t=$("#fshHideMoves",n)
S&&"hideMoves"in S&&(t.prop("checked",S.hideMoves),$(".moveMax").toggle(!S.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
S&&"minLvl"in S?t.val(S.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
S&&"maxLvl"in S?t.val(S.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function z(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,S,S.id].every(a)&&(S.id[e[1]]=e[1],function(n,t){C&&!C[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function B(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function H(n,t){const a=L.exec($("img",n).attr("src"))
a&&(!function(n,t){S.moves[n[1]]&&3===S.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function V(n,t){const a=$(t),e=a.children()
z(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(B)}(e),function(n,t){const a=n.eq(8)
S&&S.moves&&H(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const K=n=>[n,Number(n.previousElementSibling.value)]
function P(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Q(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function U(n){n&&n.classList&&n.classList.add("fshGray")}function W(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&U(t)}function X(n,t,a){E(a.players.map(r(Q,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&U(t)}(n,t,a)}const Y=[a,n=>q(n.players),n=>n.players.length>0]
function Z(n,[t,,a]){Y.every((n=>n(a)))&&X(n,t,a)}function nn(n){if(!n||!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(K).map(r(P,n))}(n)
t.forEach(r(Z,w())),t.forEach(r(W,n))}const tn="td.sorting, td.sorting_asc, td.sorting_desc"
function an(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function en(n){return i(f({cmd:"arena"},n))}function sn(){return en({subcmd:"view"})}function rn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function on(){R(),D(),$.fn.dataTable.ext.search.push(O)}function cn(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(rn),function(n){S=n||{},C=S.id||{},S.id={}}(t),function(n){n.children("tbody").children("tr").each(V)}(i),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(F,t),{})
v("fsh_arenaFull",o)}(o),nn(c),on(),i.DataTable(M),function(n){$(tn,n).off("click"),n.on("click",tn,an)}(n)}function fn(n,t){const a=u("betaOptIn")
a&&m("arena.process"),e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),cn(n,t),_(),a&&p("arena.process")}function dn(){if(d())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([h(x),h("fsh_arenaFull"),sn().catch((()=>({}))),k()],r(fn,t))}(t):l("arena","Join error screen ?")}var ln=Object.freeze({__proto__:null,default:dn})
export{en as a,ln as b,dn as i,sn as v}
//# sourceMappingURL=arena-0a52c00e.js.map
