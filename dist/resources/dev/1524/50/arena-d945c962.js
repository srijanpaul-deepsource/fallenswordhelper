import{a as n}from"./allthen-2ff5fddb.js"
import{c as t}from"./closestTr-868b7fea.js"
import{am as e,E as a,e as s,t as r,aw as o,d as i,Q as c,x as f,q as d,y as l,T as u,I as m,ax as p,ay as v}from"./calfSystem-b3667af8.js"
import{s as h,g as b}from"./idb-22dd2687.js"
import{i as g}from"./intValue-76dfee09.js"
import{c as x}from"./changeMinMax-5835769c.js"
import{f as y,a as L,m as M,t as T}from"./assets-64d5f82f.js"
import{l as j,p as _}from"./lvlTests-b339adbe.js"
import{i as k}from"./interceptSubmit-dd886fe1.js"
import{l as w}from"./loadDataTables-ad74b274.js"
import{c as q}from"./currentGuildId-01980e74.js"
import{s as E}from"./setTipped-5e35ee46.js"
function F(n,e,[a,s]){const r=n.find((([,n])=>n===a))
return r&&(t(r[0]).style.backgroundColor="#ff0000",e[a]=s),e}let C,D
function N(){h(y,C)}function S(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,N()}function I(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function G(){x(S,I)}function J(){S(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),I()}function O(n){C=C||{},C.hideMoves=n.target.checked,N(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!C||function(n,t){const e=C.minLvl,a=C.maxLvl,s=g(t[7])
return j(_,s,e,a)}(0,t)}function z(n,t,e,a){return!0}function A(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(L)
!function(n){const t=$("#fshHideMoves",n)
C&&"hideMoves"in C&&(t.prop("checked",C.hideMoves),$(".moveMax").toggle(!C.hideMoves)),t.on("click",O)}(t),function(n){const t=$("#fshMinLvl",n)
C&&"minLvl"in C?t.val(C.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
C&&"maxLvl"in C?t.val(C.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",G),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function B(n,t){const a=/#\s(\d+)/.exec(t.eq(0).text());[a,C,C.id].every(e)&&(C.id[a[1]]=a[1],function(n,t){D&&!D[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,a[1]))}function H(n,t){const e=/(\d)\.png/.exec($("img",t).attr("src"))
e&&$(t).attr("data-order",e[1])}function Q(n,t){const e=M.exec($("img",n).attr("src"))
e&&(!function(n,t){C.moves[n[1]]&&3===C.moves[n[1]]&&t.addClass("moveMax")}(e,t),n.attr("data-order",e[1]))}function V(n,t){const e=$(t),a=e.children()
B(e,a),function(n){const t=n.eq(1),e=/(\d+)\s\/\s(\d+)/.exec(t.text())
e&&t.attr("data-order",100*(Number(e[1])-Number(e[2]))+Number(e[2]))}(a),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(a),function(n){n.slice(4,7).each(H)}(a),function(n,t){const e=n.eq(8)
C&&C.moves&&Q(e,t)}(a,e),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(a)}const K=n=>[n,Number(n.previousElementSibling.value)]
function P(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function U(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n&&n.classList&&n.classList.add("fshGray")}function X(n,[t,,e]){e&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(e=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===e.max
var e})(n,e)&&W(t)}function Y(n,t,e){E(e.players.map(r(U,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,e){e.players.filter((t=>t.guild_id===n)).length===e.max_players/4&&W(t)}(n,t,e)}const Z=[e,n=>c(n.players),n=>n.players.length>0]
function nn(n,[t,,e]){Z.every((n=>n(e)))&&Y(n,t,e)}function tn(n){if(!n||!n.s||!e(n.r))return
const t=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(K).map(r(P,n))}(n)
t.forEach(r(nn,q())),t.forEach(r(X,n))}const en="td.sorting, td.sorting_asc, td.sorting_desc"
function an(n){const t=$(n.target).closest("td"),e=function(n){const t=n.attr("class"),e=/sorting([^\s]+)/.exec(t)
return e&&"_desc"===e[1]?"asc":"desc"}(t)
!function(n,t,e){const a=n.closest(i).DataTable()
3!==t?a.order([3,"asc"],[t,e]).draw():a.order([3,e]).draw()}(t,t.index(),e)}function sn(n){return f(d({cmd:"arena"},n))}function rn(){return sn({subcmd:"view"})}function on(n,t){const e=$("tr",t).first()
$("a",e).contents().unwrap(),$(t).prepend($("<thead/>").append(e))}function cn(){A(),N(),$.fn.dataTable.ext.search.push(R),$.fn.dataTable.ext.search.push(z)}function fn(n,[t,o,i]){const c=$('table[width="635"]',n)
c.each(on),function(n){C=n||{},D=C.id||{},C.id={}}(t),function(n){n.children("tbody").children("tr").each(V)}(c),function(n){if(!e(n))return
const t=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(F,t),{})
h("fsh_arenaFull",o)}(o),tn(i),cn(),c.DataTable(T),function(n){$(en,n).off("click"),n.on("click",en,an)}(n)}function dn(n,t){const e=m("betaOptIn")
e&&p("arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),fn(n,t),k(),e&&v("arena.process")}function ln(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([b(y),b("fsh_arenaFull"),rn().catch((()=>({}))),w()],r(dn,t))}(t):u("arena","Join error screen ?")}var un=Object.freeze({__proto__:null,default:ln})
export{sn as a,un as b,ln as i,rn as v}
//# sourceMappingURL=arena-d945c962.js.map
