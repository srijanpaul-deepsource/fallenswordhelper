import{aZ as n,t as e,I as t,bA as a,a8 as s,a6 as l,a0 as i,ar as r,y as o,o as f,f as u,v as c}from"./calfSystem-817ceb25.js"
import{c as d}from"./currentGuildId-0741b5a4.js"
import{i as h}from"./intValue-af3aed3f.js"
import{a as p,g as v}from"./levelHighlight-0234fe17.js"
import{n as m}from"./numberIsNaN-9d4c441b.js"
import{l as g,p as y}from"./lvlTests-d8350da2.js"
import{l as M}from"./loadDataTables-71d4a49e.js"
import{o as L}from"./onlinePlayersPage-20d0730f.js"
import{g as P,s as b}from"./idb-104727d0.js"
import"./valueText-35bd586a.js"
import"./all-73a73e22.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==d(),n=>h(n[2])>=p(),n=>h(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=q("#fshMinLvl",n),s=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(h(t[2]),0)
return g(y,i,a,s)}let _,D,z,A
function G(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return n(t).map(e(x,t))}(D))}function H(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return D[n]&&D[n][3]>e})(s,n)||(D[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function S(n,e){A=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=A;e+=1)L(e).then(n)}function V(n){$("#fshOutput",_).append(n)}function W(n){V(` ${z+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(H,a))}(t,a),z+=1,1===z&&S(W,a),z===A&&(b("fsh_onlinePlayers",D),G(D))}function Z(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),O()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),P("fsh_onlinePlayers").then(G),f(_[0],Z),u(_[0],"keyup",k)}function E(n){o()||(_=n?$(n):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-3d6868f3.js.map