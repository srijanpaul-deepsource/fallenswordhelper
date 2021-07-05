import{a as n}from"./allthen-f7cedfa7.js"
import{c as t}from"./closestTr-e99b6a01.js"
import{am as a,E as e,e as s,t as r,aw as o,d as c,Q as i,x as f,q as l,y as d,T as u,I as m,ax as p,ay as v}from"./calfSystem-9ab64478.js"
import{s as h,g as b}from"./idb-9da90398.js"
import{i as g}from"./intValue-f11572ef.js"
import{c as x}from"./changeMinMax-98de10ec.js"
import{f as y,a as L,m as M,t as T}from"./assets-f2535d93.js"
import{l as j,p as _}from"./lvlTests-e3abbf2e.js"
import{i as k}from"./interceptSubmit-ba23111a.js"
import{l as w}from"./loadDataTables-5edaaf63.js"
import{c as q}from"./currentGuildId-c05147ac.js"
import{s as E}from"./setTipped-11c01061.js"
function F(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let C,D
function N(){h(y,C)}function S(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,N()}function I(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function G(){x(S,I)}function J(){S(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),I()}function O(n){C=C||{},C.hideMoves=n.target.checked,N(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!C||function(n,t){const a=C.minLvl,e=C.maxLvl,s=g(t[7])
return j(_,s,a,e)}(0,t)}function z(n,t,a,e){return!0}function A(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(L)
!function(n){const t=$("#fshHideMoves",n)
C&&"hideMoves"in C&&(t.prop("checked",C.hideMoves),$(".moveMax").toggle(!C.hideMoves)),t.on("click",O)}(t),function(n){const t=$("#fshMinLvl",n)
C&&"minLvl"in C?t.val(C.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
C&&"maxLvl"in C?t.val(C.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",G),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function B(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,C,C.id].every(a)&&(C.id[e[1]]=e[1],function(n,t){D&&!D[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function H(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function Q(n,t){const a=M.exec($("img",n).attr("src"))
a&&(!function(n,t){C.moves[n[1]]&&3===C.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function V(n,t){const a=$(t),e=a.children()
B(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(H)}(e),function(n,t){const a=n.eq(8)
C&&C.moves&&Q(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const K=n=>[n,Number(n.previousElementSibling.value)]
function P(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function U(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n&&n.classList&&n.classList.add("fshGray")}function X(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&W(t)}function Y(n,t,a){E(a.players.map(r(U,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&W(t)}(n,t,a)}const Z=[a,n=>i(n.players),n=>n.players.length>0]
function nn(n,[t,,a]){Z.every((n=>n(a)))&&Y(n,t,a)}function tn(n){if(!n||!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(K).map(r(P,n))}(n)
t.forEach(r(nn,q())),t.forEach(r(X,n))}const an="td.sorting, td.sorting_asc, td.sorting_desc"
function en(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function sn(n){return f(l({cmd:"arena"},n))}function rn(){return sn({subcmd:"view"})}function on(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function cn(){A(),N(),$.fn.dataTable.ext.search.push(R),$.fn.dataTable.ext.search.push(z)}function fn(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(on),function(n){C=n||{},D=C.id||{},C.id={}}(t),function(n){n.children("tbody").children("tr").each(V)}(i),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(F,t),{})
h("fsh_arenaFull",o)}(o),tn(c),cn(),i.DataTable(T),function(n){$(an,n).off("click"),n.on("click",an,en)}(n)}function ln(n,t){const a=m("betaOptIn")
a&&p("arena.process"),e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),fn(n,t),k(),a&&v("arena.process")}function dn(){if(d())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([b(y),b("fsh_arenaFull"),rn().catch((()=>({}))),w()],r(ln,t))}(t):u("arena","Join error screen ?")}var un=Object.freeze({__proto__:null,default:dn})
export{sn as a,un as b,dn as i,rn as v}
//# sourceMappingURL=arena-98f7c635.js.map
