import{S as t,i as o,s,b as e,t as a,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as d}from"./index-c31cc1d2.js"
import{I as f,c as b,S as h,aM as j,aC as g,cd as k,N as x,ce as y,al as T,bJ as v,s as S,T as $,D as q}from"./calfSystem-b3667af8.js"
import{c as G}from"./currentGuildId-01980e74.js"
import{a as w}from"./getIsOwnGuild-3d053f2d.js"
import{a as J}from"./profile-100e9d0d.js"
import{o as B}from"./openQuickBuffByName-18de8163.js"
import"./colouredDots-72a91295.js"
import"./batch-1a09a87c.js"
import"./onlineDot-38946dd7.js"
import"./doStatTotal-7dac1b93.js"
import"./executeAll-30735897.js"
import"./playerName-8bccbcca.js"
import"./asInt-4d304164.js"
import"./intValue-76dfee09.js"
import"./valueText-5f82bcfb.js"
import"./interceptSubmit-dd886fe1.js"
import"./formToUrl-872022b8.js"
import"./fshOpen-90a0d847.js"
function I(t){let o,s,b,h,j,k,x,y,T,v,S,$,q,w,J,B,I=t[1]&&f("showAdmin"),N=t[1]&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=I&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),d(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=p(),j=e("button"),k=a(" "),x=p(),y=e("button"),T=a(" "),v=p(),S=e("button"),$=a(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,v),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),J||(B=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],J=!0)},p(t,[o]){t[1]&&N.p(t,o),I&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),J=!1,m(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),e=h("player_id")||j(),a=J()
function i(t){$("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${v}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${e}`)}]}class A extends t{constructor(t){super(),o(this,t,N,I,s,{})}}function C(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-6c40fbf8.js.map
