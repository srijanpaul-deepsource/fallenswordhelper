import{a as n}from"./allthen-3a0631ad.js"
import{c as t}from"./closestTr-c53b56bf.js"
import{ag as a,E as e,e as s,t as r,aq as o,d as i,x as c,q as f,y as l,W as d}from"./calfSystem-15b00143.js"
import{s as u,g as m}from"./idb-1c9eb1ac.js"
import{i as p}from"./intValue-9eb8a210.js"
import{c as v}from"./changeMinMax-b261f8ce.js"
import{f as h,a as b,m as g,t as x}from"./assets-62f5bf10.js"
import{l as y,p as L}from"./lvlTests-a299d5a1.js"
import{i as M}from"./interceptSubmit-a16f18a6.js"
import{l as T}from"./loadDataTables-ad66bfa0.js"
import{c as j}from"./currentGuildId-ad15ffa8.js"
import{i as _}from"./isArray-68a41fd5.js"
import{s as k}from"./setTipped-1ee3895d.js"
function w(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let q,E
function F(){u(h,q)}function C(n,t){q=q||{},q.minLvl=n,q.maxLvl=t,F()}function D(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function N(){v(C,D)}function S(){C(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),D()}function A(n){q=q||{},q.hideMoves=n.target.checked,F(),$(".moveMax").toggle(!n.target.checked)}function G(n,t){return!q||function(n,t){const a=q.minLvl,e=q.maxLvl,s=p(t[7])
return y(L,s,a,e)}(0,t)}function J(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(b)
!function(n){const t=$("#fshHideMoves",n)
q&&"hideMoves"in q&&(t.prop("checked",q.hideMoves),$(".moveMax").toggle(!q.hideMoves)),t.on("click",A)}(t),function(n){const t=$("#fshMinLvl",n)
q&&"minLvl"in q?t.val(q.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
q&&"maxLvl"in q?t.val(q.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",N),$("#fshReset",n).on("click",S)}(t),$("td",n).append(t)}function R(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,q,q.id].every(a)&&(q.id[e[1]]=e[1],function(n,t){E&&!E[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function z(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function B(n,t){const a=g.exec($("img",n).attr("src"))
a&&(!function(n,t){q.moves[n[1]]&&3===q.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function H(n,t){const a=$(t),e=a.children()
R(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(z)}(e),function(n,t){const a=n.eq(8)
q&&q.moves&&B(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const I=n=>[n,Number(n.previousElementSibling.value)]
function O(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function V(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n&&n.classList&&n.classList.add("fshGray")}function K(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&W(t)}function P(n,t,a){k(a.players.map(r(V,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&W(t)}(n,t,a)}const Q=[a,n=>_(n.players),n=>n.players.length>0]
function U(n,[t,,a]){Q.every((n=>n(a)))&&P(n,t,a)}function X(n){if(!n||!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(I).map(r(O,n))}(n)
t.forEach(r(U,j())),t.forEach(r(K,n))}const Y="td.sorting, td.sorting_asc, td.sorting_desc"
function Z(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(i).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function nn(n){return c(f({cmd:"arena"},n))}function tn(){return nn({subcmd:"view"})}function an(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function en(){J(),F(),$.fn.dataTable.ext.search.push(G)}function sn(n,[t,o,i]){const c=$('table[width="635"]',n)
c.each(an),function(n){q=n||{},E=q.id||{},q.id={}}(t),function(n){n.children("tbody").children("tr").each(H)}(c),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(w,t),{})
u("fsh_arenaFull",o)}(o),X(i),en(),c.DataTable(x),function(n){$(Y,n).off("click"),n.on("click",Y,Z)}(n)}function rn(n,t){e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),sn(n,t),M()}function on(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([m(h),m("fsh_arenaFull"),tn().catch((()=>({}))),T()],r(rn,t))}(t):d("arena","Join error screen ?")}var cn=Object.freeze({__proto__:null,default:on})
export{nn as a,cn as b,on as i,tn as v}
//# sourceMappingURL=arena-721f3cc9.js.map
