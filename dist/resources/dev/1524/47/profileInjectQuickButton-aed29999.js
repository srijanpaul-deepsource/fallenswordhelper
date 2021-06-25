import{S as t,i as o,s as e,b as s,t as a,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-6ed75119.js"
import{I as d,c as b,S as h,aL as j,aB as g,cc as k,N as x,cd as y,ak as T,bI as v,s as S,T as $,D as q}from"./calfSystem-bfc1f6c0.js"
import{c as G}from"./currentGuildId-92fe6d54.js"
import{a as w}from"./getIsOwnGuild-97da8dd8.js"
import{a as B}from"./profile-630d8095.js"
import{o as I}from"./openQuickBuffByName-3a3b6dee.js"
import"./colouredDots-7715392d.js"
import"./batch-8ae36ec2.js"
import"./onlineDot-3ab91a4e.js"
import"./doStatTotal-b8475745.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-3c8c8393.js"
import"./asInt-95882709.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-ff818578.js"
import"./interceptSubmit-6c866cd4.js"
import"./formToUrl-bf2c911a.js"
import"./fshOpen-a2455e89.js"
function J(t){let o,e,b,h,j,k,x,y,T,v,S,$,q,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),v=p(),S=s("button"),$=a(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,v),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),B||(I=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,m(I)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=h("player_id")||j(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),I(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${v}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-aed29999.js.map
