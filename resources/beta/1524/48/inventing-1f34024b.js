import{S as t,i as n,s as e,b as i,c as s,t as a,v as o,a as r,g as c,j as u,k as p,w as d,d as m,f as l,x as f,l as h,y as g,z as v,A as b,B as x,C as w,r as C,D as y}from"./index-2f0e5ca2.js"
import{x as F,u as $,w as k,$ as I,S as B,C as D,D as j,E,aB as q,p as A,aQ as S,aH as _,h as N,j as T}from"./calfSystem-8af1dca2.js"
import{c as M}from"./createAnchor-9068e154.js"
import{i as Q}from"./insertElementBefore-5adb1609.js"
import{x as R}from"./xPath-39740b5f.js"
function z(t){return F({cmd:"inventing",subcmd:"doinvent",recipe_id:t})}function O(t){const n=k(t)
return n.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:n},s:!1}}function P(t){return $({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(O)}function W(t){const n=t-1
return n*n*n+1}function G(t,{delay:n=0,duration:e=400,easing:i=W}={}){const s=getComputedStyle(t),a=+s.opacity,o=parseFloat(s.height),r=parseFloat(s.paddingTop),c=parseFloat(s.paddingBottom),u=parseFloat(s.marginTop),p=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),m=parseFloat(s.borderBottomWidth)
return{delay:n,duration:e,easing:i,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*a};height: ${t*o}px;padding-top: ${t*r}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*p}px;border-top-width: ${t*d}px;border-bottom-width: ${t*m}px;`}}function H(t){let n,e,l,f,h,g,v
return{c(){n=i("div"),e=i("div"),e.textContent="INFORMATION",l=s(),f=i("div"),h=a(t[4]),o(e,"background","#8E8668"),o(e,"color","#FFF"),o(e,"font-size","smaller"),o(n,"border","2px solid #FFF"),o(n,"margin","10px auto"),o(n,"width","80%"),o(n,"background","#D3CFC1")},m(t,i){r(t,n,i),c(n,e),c(n,l),c(n,f),c(f,h),v=!0},p(t,n){(!v||16&n)&&u(h,t[4])},i(t){v||(t&&p((()=>{g||(g=d(n,G,{},!0)),g.run(1)})),v=!0)},o(t){t&&(g||(g=d(n,G,{},!1)),g.run(0)),v=!1},d(t){t&&m(n),t&&g&&g.end()}}}function Z(t){let n,e,p,d,F,$,k,I,B,D,j,E,q,A,S,_,N,T,M,Q,R,z,O,P,W,G,Z,J,K,L=t[1]+t[2]+"",U=t[4]&&H(t)
return{c(){n=i("form"),e=i("label"),e.textContent="Select how many to quick invent",p=s(),d=i("input"),F=s(),$=i("button"),$.textContent="(max)",k=s(),I=i("input"),B=s(),D=i("div"),U&&U.c(),j=s(),E=i("div"),q=i("div"),A=s(),S=i("p"),_=a(L),N=a(" / "),T=a(t[0]),M=s(),Q=i("div"),R=i("div"),z=a("Successes: "),O=a(t[1]),P=s(),W=i("div"),G=a("Failures: "),Z=a(t[2]),l(e,"for","quick-invent-amount"),l(d,"type","number"),l(d,"id","quick-invent-amount"),l(d,"name","quick-invent-amount"),l(d,"min","0"),l(d,"step","1"),l(d,"class","custominput fshNumberInput"),d.required=!0,l($,"type","button"),l($,"class","fshBl"),l(I,"class","custombutton"),l(I,"type","submit"),I.value="Quick Invent",o(I,"margin-left","8px"),l(q,"class","composing-progress-bar"),o(q,"background-position","right top"),o(q,"width",t[3]+"%"),o(q,"transition","width 0.4s ease-out"),o(q,"position","absolute"),o(q,"top","0px"),o(S,"position","relative"),l(E,"class","composing-progress"),o(E,"margin","0px auto"),o(E,"font-weight","bold"),o(E,"color","#fff"),o(E,"left","0px"),o(R,"display","inline-block"),o(R,"width","250px"),l(R,"class","fshQs fshGreen"),o(W,"display","inline-block"),o(W,"width","250px"),l(W,"class","fshQs fshRed"),o(Q,"margin-top","36px"),l(n,"class","fshCenter"),o(n,"margin-top","12px")},m(i,s){r(i,n,s),c(n,e),c(n,p),c(n,d),f(d,t[0]),c(n,F),c(n,$),c(n,k),c(n,I),c(n,B),c(n,D),U&&U.m(D,null),c(D,j),c(D,E),c(E,q),c(E,A),c(E,S),c(S,_),c(S,N),c(S,T),c(D,M),c(D,Q),c(Q,R),c(R,z),c(R,O),c(Q,P),c(Q,W),c(W,G),c(W,Z),J||(K=[h(d,"input",t[9]),h($,"click",t[5]),h(n,"submit",g(t[6]))],J=!0)},p(t,[n]){1&n&&v(d.value)!==t[0]&&f(d,t[0]),t[4]?U?(U.p(t,n),16&n&&b(U,1)):(U=H(t),U.c(),b(U,1),U.m(D,j)):U&&(y(),x(U,1,1,(()=>{U=null})),w()),8&n&&o(q,"width",t[3]+"%"),6&n&&L!==(L=t[1]+t[2]+"")&&u(_,L),1&n&&u(T,t[0]),2&n&&u(O,t[1]),4&n&&u(Z,t[2])},i(t){b(U)},o(t){x(U)},d(t){t&&m(n),U&&U.d(),J=!1,C(K)}}}function J(t,n,e){let{max:i}=n,{recipeID:s}=n,a=1,o=0,r=0,c=0,u=""
return t.$$set=t=>{"max"in t&&e(7,i=t.max),"recipeID"in t&&e(8,s=t.recipeID)},[a,o,r,c,u,function(){e(0,a=i),B("inventing","maxInventButton")},async function(){if(B("inventing","quickInvent"),!a)return
e(1,o=0),e(2,r=0),e(3,c=0),e(4,u=""),Array(a).fill(s).reduce((async(t,n)=>{const i=await t
if(!i||!0===i.s){const t=await function(t){return I(z,P,t)}(n)
return!1===t.s?e(4,u=t.e.message):t.r.success_count>0?e(1,o+=1):e(2,r+=1),e(3,c=(o+r)/a*100),t}return i}),Promise.resolve())},i,s,function(){a=v(this.value),e(0,a)}]}class K extends t{constructor(t){super(),n(this,t,J,Z,e,{max:7,recipeID:8})}}function L(t){const[n,e]=D(j("tr:nth-child(2) td",t)).split("/").map((t=>parseInt(t,10)))
return{have:n,need:e,id:j("img",t).src.match(/(\d+)\.[A-Za-z]+$/)[1]}}function U(){return E(`#pCC td[background^="${q}ui/inventory/"]`).map((t=>t.parentElement.parentElement)).map(L).reduce(((t,n)=>Math.min(t,Math.floor(n.have/n.need))),1/0)}function V(){const t=j('input[name="recipe_id"]')
if(!t)return
const n=U(),e=A.lastElementChild
var i,s
!function(t){const n=t.insertRow(-1).insertCell(-1)
n.className="header",n.setAttribute("height","1")}(e),i={max:n,recipeID:t.value},s=function(t){const n=t.insertRow(-1).insertCell(-1)
return n.className="fshCenter",n}(e),new K({props:i,target:s})}function X(t){return`${S}items${_}view&item_id=${t}`}function Y(t,n){const e=function(t){if(!t)return
const n=t.src.match(/\/items\/(\d+)\.gif/)
return n?n[1]:void 0}(n)
if(!e)return
const i=function(t){return M({href:X(t),target:"_blank"})}(e)
Q(i,t),N(i,t)}function tt(t){Y(t,t)}function nt(){!function(){const t=R('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
Y(j("#pCC b"),t)}(),E('#pCC img[src*="/items/"]').forEach(tt)}function et(){T()&&(nt(),V())}export default et
//# sourceMappingURL=inventing-1f34024b.js.map
