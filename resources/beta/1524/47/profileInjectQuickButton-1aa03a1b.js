import{S as t,i as o,s as e,b as s,t as a,f as c,a as i,g as n,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-6ed75119.js"
import{I as d,c as b,R as j,aK as h,aA as g,cb as k,N as x,cc as y,aj as v,bH as T,s as S,S as $,D as q}from"./calfSystem-db2edbef.js"
import{c as G}from"./currentGuildId-3f7c0e1c.js"
import{a as w}from"./getIsOwnGuild-1130cab7.js"
import{a as A}from"./profile-ee1ef306.js"
import{o as B}from"./openQuickBuffByName-76c48ffd.js"
import"./colouredDots-6c1de22d.js"
import"./batch-ecccc095.js"
import"./onlineDot-1f0e9c19.js"
import"./doStatTotal-3ad45754.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-70d3d303.js"
import"./asInt-48dcc84c.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-cde56b68.js"
import"./interceptSubmit-37405c90.js"
import"./formToUrl-b338bcd1.js"
import"./fshOpen-a2455e89.js"
function I(t){let o,e,b,j,h,k,x,y,v,T,S,$,q,w,A,B,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),c(o,"class","fshTempleThree svelte-1xo8gqh"),c(o,"type","button"),c(o,"data-tooltip","Recall items from "+t[2])},m(s,a){i(s,o,a),n(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),N=I&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),c(o,"type","button"),c(o,"data-tooltip","Rank "+t[2]),c(o,"class","svelte-1xo8gqh")},m(s,a){i(s,o,a),n(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),j=p(),h=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),S=s("button"),$=a(" "),q=p(),J&&J.c(),w=p(),N&&N.c(),c(e,"class","fshQuickBuff svelte-1xo8gqh"),c(e,"type","button"),c(e,"data-tooltip","Buff "+t[2]),c(h,"class","fshJoin svelte-1xo8gqh"),c(h,"type","button"),c(h,"data-tooltip","Join All Groups"+t[0]),c(y,"class","fshGold svelte-1xo8gqh"),c(y,"type","button"),c(y,"data-tooltip","Go to "+t[2]+"'s auctions"),c(S,"class","fshTempleTwo svelte-1xo8gqh"),c(S,"type","button"),c(S,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){i(s,o,a),n(o,e),n(e,b),n(o,j),n(o,h),n(h,k),n(o,x),n(o,y),n(y,v),n(o,T),n(o,S),n(S,$),n(o,q),J&&J.m(o,null),n(o,w),N&&N.m(o,null),A||(B=[r(e,"click",t[3]),r(h,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],A=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&N.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),N&&N.d(),A=!1,m(B)}}}function J(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=j("player_id")||h(),a=A()
function c(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),c("quickbuff"),B(a)},function(){c("join groups"),k()},function(){c("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){c("secure trade"),x(`${v}${a}`)},function(){c("recall items"),x(`${T}${a}`)},function(){c("rank"),x(`${S}members&subcmd2=changerank&member_id=${s}`)}]}class N extends t{constructor(t){super(),o(this,t,J,I,e,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new N({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-1aa03a1b.js.map
