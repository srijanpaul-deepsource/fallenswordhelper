import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-b63851a0.js"
import{I as d,S as b,aC as h,at as g,c as j,c6 as k,O as x,c7 as y,bJ as T,by as q,s as v,W as S,D as $}from"./calfSystem-540da563.js"
import{c as G}from"./currentGuildId-dc83d308.js"
import{a as w}from"./getIsOwnGuild-d2a53861.js"
import{a as J}from"./profile-6dfbdb6d.js"
import{o as B}from"./openQuickBuffByName-5c5f0fdb.js"
import"./colouredDots-72576aa3.js"
import"./batch-735e3bee.js"
import"./onlineDot-87712eda.js"
import"./doStatTotal-a78f8d49.js"
import"./executeAll-6bc810f1.js"
import"./playerName-c00ebc45.js"
import"./intValue-e485889b.js"
import"./valueText-87497ead.js"
import"./interceptSubmit-b94311a2.js"
import"./formToUrl-efa4fabd.js"
import"./fshOpen-9656868c.js"
function A(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,J,B,A=t[1]&&d("showAdmin"),C=t[1]&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),D=A&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),T=s(" "),q=p(),v=a("button"),S=s(" "),$=p(),C&&C.c(),w=p(),D&&D.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),C&&C.m(o,null),r(o,w),D&&D.m(o,null),J||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],J=!0)},p(t,[o]){t[1]&&C.p(t,o),A&&D.p(t,o)},i:l,o:l,d(t){t&&u(o),C&&C.d(),D&&D.d(),J=!1,m(B)}}}function C(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=b("player_id")||h(),s=J()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),B(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${q}${s}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class D extends t{constructor(t){super(),o(this,t,C,A,e,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new D({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-bc6a1347.js.map
