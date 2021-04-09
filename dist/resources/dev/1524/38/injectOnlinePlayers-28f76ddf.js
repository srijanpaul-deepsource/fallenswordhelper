import{aS as e,t as n,I as t,bz as a,a8 as s,a6 as l,a0 as i,ah as r,y as o,o as f,f as u,v as c}from"./calfSystem-d56087e1.js"
import{c as h}from"./currentGuildId-1893e725.js"
import{i as d}from"./intValue-ba9b9e5a.js"
import{a as p,g as v}from"./levelHighlight-48b907f1.js"
import{n as m}from"./numberIsNaN-30cde299.js"
import{l as g,p as y}from"./lvlTests-a778f69b.js"
import{l as M}from"./loadDataTables-851264f9.js"
import{o as L}from"./onlinePlayersPage-5d93b9fc.js"
import{g as b,s as P}from"./idb-a1e4e2c2.js"
import"./valueText-72f14761.js"
import"./all-edb79f43.js"
function x(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let j,C
const I=[()=>j,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==h(),e=>d(e[2])>=p(),e=>d(e[2])<=v()]
function R(e,n){(function(e){return I.every((n=>n(e)))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function w(e,n){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function O(){C.draw()}function k(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||O()}function q(e,n){return parseInt($(e,n).val(),10)}function N(e,n){m(n)||i(e,n)}function T(e,n,t){const a=q("#fshMinLvl",e),s=q("#fshMaxLvl",e)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,z,D,S
function G(a){z=a||{},function(e){$.fn.dataTable.ext.search.push(n(T,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return e(t).map(n(x,t))}(z))}function H(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return z[e]&&z[e][3]>n})(s,e)||(z[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function A(e,n){S=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=S;n+=1)L(n).then(e)}function V(e){$("#fshOutput",_).append(e)}function W(e){V(` ${D+1}`)
const t=c(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(H,a))}(t,a),D+=1,1===D&&A(W,a),D===S&&(P("fsh_onlinePlayers",z),G(z))}function B(e){"fshRefresh"===e.target.id&&($("#fshRefresh",_).hide(),D=0,z={},L(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),O()}(_)}function E(){_.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(G),f(_[0],B),u(_[0],"keyup",k)}function F(e){o()||(_=e?$(e):$("#pCC"),M().then(E))}export default F
//# sourceMappingURL=injectOnlinePlayers-28f76ddf.js.map
