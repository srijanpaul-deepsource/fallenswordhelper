import{S as t,i as n,s as e,b as i,c as s,t as a,v as o,a as r,g as c,j as u,k as p,w as m,d,f as l,x as f,l as h,y as g,z as b,A as v,B as x,C as w,r as C,D as y}from"./index-c7b13239.js"
import{x as F,u as $,w as k,$ as I,S as D,C as j,D as A,E as B,aA as E,p as q,aP as S,aG as _,h as N,j as T}from"./calfSystem-2172498b.js"
import{c as M}from"./createAnchor-24329b70.js"
import{i as R}from"./insertElementBefore-c7161beb.js"
import{x as z}from"./xPath-551a088a.js"
function P(t){return F({cmd:"inventing",subcmd:"doinvent",recipe_id:t})}function Q(t){const n=k(t)
return n.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:n},s:!1}}function G(t){return $({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(Q)}function O(t){const n=t-1
return n*n*n+1}function W(t,{delay:n=0,duration:e=400,easing:i=O}={}){const s=getComputedStyle(t),a=+s.opacity,o=parseFloat(s.height),r=parseFloat(s.paddingTop),c=parseFloat(s.paddingBottom),u=parseFloat(s.marginTop),p=parseFloat(s.marginBottom),m=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth)
return{delay:n,duration:e,easing:i,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*a};height: ${t*o}px;padding-top: ${t*r}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*p}px;border-top-width: ${t*m}px;border-bottom-width: ${t*d}px;`}}function Z(t){let n,e,l,f,h,g,b
return{c(){n=i("div"),e=i("div"),e.textContent="INFORMATION",l=s(),f=i("div"),h=a(t[4]),o(e,"background","#8E8668"),o(e,"color","#FFF"),o(e,"font-size","smaller"),o(n,"border","2px solid #FFF"),o(n,"margin","10px auto"),o(n,"width","80%"),o(n,"background","#D3CFC1")},m(t,i){r(t,n,i),c(n,e),c(n,l),c(n,f),c(f,h),b=!0},p(t,n){(!b||16&n)&&u(h,t[4])},i(t){b||(t&&p((()=>{g||(g=m(n,W,{},!0)),g.run(1)})),b=!0)},o(t){t&&(g||(g=m(n,W,{},!1)),g.run(0)),b=!1},d(t){t&&d(n),t&&g&&g.end()}}}function H(t){let n,e,p,m,F,$,k,I,D,j,A,B,E,q,S,_,N,T,M,R,z,P,Q,G,O,W,H,J,K,L=t[1]+t[2]+"",U=t[4]&&Z(t)
return{c(){n=i("form"),e=i("label"),e.textContent="Select how many to quick invent",p=s(),m=i("input"),F=s(),$=i("button"),$.textContent="(max)",k=s(),I=i("input"),D=s(),j=i("div"),U&&U.c(),A=s(),B=i("div"),E=i("div"),q=s(),S=i("p"),_=a(L),N=a(" / "),T=a(t[0]),M=s(),R=i("div"),z=i("div"),P=a("Successes: "),Q=a(t[1]),G=s(),O=i("div"),W=a("Failures: "),H=a(t[2]),l(e,"for","quick-invent-amount"),l(m,"type","number"),l(m,"id","quick-invent-amount"),l(m,"name","quick-invent-amount"),l(m,"min","0"),l(m,"step","1"),l(m,"class","custominput fshNumberInput"),m.required=!0,l($,"type","button"),l($,"class","fshBl"),l(I,"class","custombutton"),l(I,"type","submit"),I.value="Quick Invent",o(I,"margin-left","8px"),l(E,"class","composing-progress-bar"),o(E,"background-position","right top"),o(E,"width",t[3]+"%"),o(E,"transition","width 0.4s ease-out"),o(E,"position","absolute"),o(E,"top","0px"),o(S,"position","relative"),l(B,"class","composing-progress"),o(B,"margin","0px auto"),o(B,"font-weight","bold"),o(B,"color","#fff"),o(B,"left","0px"),o(z,"display","inline-block"),o(z,"width","250px"),l(z,"class","fshQs fshGreen"),o(O,"display","inline-block"),o(O,"width","250px"),l(O,"class","fshQs fshRed"),o(R,"margin-top","36px"),l(n,"class","fshCenter"),o(n,"margin-top","12px")},m(i,s){r(i,n,s),c(n,e),c(n,p),c(n,m),f(m,t[0]),c(n,F),c(n,$),c(n,k),c(n,I),c(n,D),c(n,j),U&&U.m(j,null),c(j,A),c(j,B),c(B,E),c(B,q),c(B,S),c(S,_),c(S,N),c(S,T),c(j,M),c(j,R),c(R,z),c(z,P),c(z,Q),c(R,G),c(R,O),c(O,W),c(O,H),J||(K=[h(m,"input",t[9]),h($,"click",t[5]),h(n,"submit",g(t[6]))],J=!0)},p(t,[n]){1&n&&b(m.value)!==t[0]&&f(m,t[0]),t[4]?U?(U.p(t,n),16&n&&v(U,1)):(U=Z(t),U.c(),v(U,1),U.m(j,A)):U&&(y(),x(U,1,1,(()=>{U=null})),w()),8&n&&o(E,"width",t[3]+"%"),6&n&&L!==(L=t[1]+t[2]+"")&&u(_,L),1&n&&u(T,t[0]),2&n&&u(Q,t[1]),4&n&&u(H,t[2])},i(t){v(U)},o(t){x(U)},d(t){t&&d(n),U&&U.d(),J=!1,C(K)}}}function J(t,n,e){let{max:i}=n,{recipeID:s}=n,a=1,o=0,r=0,c=0,u=""
return t.$$set=t=>{"max"in t&&e(7,i=t.max),"recipeID"in t&&e(8,s=t.recipeID)},[a,o,r,c,u,function(){e(0,a=i),D("inventing","maxInventButton")},async function(){if(D("inventing","quickInvent"),!a)return
e(1,o=0),e(2,r=0),e(3,c=0),e(4,u=""),Array(a).fill(s).reduce((async(t,n)=>{const i=await t
if(!i||!0===i.s){const t=await function(t){return I(P,G,t)}(n)
return!1===t.s?e(4,u=t.e.message):t.r.success_count>0?e(1,o+=1):e(2,r+=1),e(3,c=(o+r)/a*100),t}return i}),Promise.resolve())},i,s,function(){a=b(this.value),e(0,a)}]}class K extends t{constructor(t){super(),n(this,t,J,H,e,{max:7,recipeID:8})}}function L(t){const[n,e]=j(A("tr:nth-child(2) td",t)).split("/").map((t=>parseInt(t,10)))
return{have:n,need:e,id:A("img",t).src.match(/(\d+)\.[A-Za-z]+$/)[1]}}function U(){return B(`#pCC td[background^="${E}ui/inventory/"]`).map((t=>t.parentElement.parentElement)).map(L).reduce(((t,n)=>Math.min(t,Math.floor(n.have/n.need))),1/0)}function V(){const t=A('input[name="recipe_id"]')
if(!t)return
const n=U(),e=q.lastElementChild
var i,s
!function(t){const n=t.insertRow(-1).insertCell(-1)
n.className="header",n.setAttribute("height","1")}(e),i={max:n,recipeID:t.value},s=function(t){const n=t.insertRow(-1).insertCell(-1)
return n.className="fshCenter",n}(e),new K({props:i,target:s})}function X(t){return`${S}items${_}view&item_id=${t}`}function Y(t,n){const e=function(t){if(!t)return
const n=t.src.match(/\/items\/(\d+)\.gif/)
return n?n[1]:void 0}(n)
if(!e)return
const i=function(t){return M({href:X(t),target:"_blank"})}(e)
R(i,t),N(i,t)}function tt(t){Y(t,t)}function nt(){!function(){const t=z('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
Y(A("#pCC b"),t)}(),B('#pCC img[src*="/items/"]').forEach(tt)}function et(){T()&&(nt(),V())}export default et
//# sourceMappingURL=inventing-3ff5ee25.js.map
