import{S as t,i as o,s,b as e,t as a,f as i,a as n,g as r,l as c,n as l,d as u,c as p,r as m,v as f}from"./index-c31cc1d2.js"
import{I as d,c as b,R as h,aL as j,aB as g,cc as k,N as x,cd as y,ak as v,bI as T,s as S,S as $,D as q}from"./calfSystem-617f9a5d.js"
import{c as G}from"./currentGuildId-3b40ad81.js"
import{a as w}from"./getIsOwnGuild-bb803e32.js"
import{a as B}from"./profile-48624fda.js"
import{o as I}from"./openQuickBuffByName-a794d2ad.js"
import"./colouredDots-78f6a735.js"
import"./batch-4134d884.js"
import"./onlineDot-3bf4ce45.js"
import"./doStatTotal-0ef44207.js"
import"./executeAll-30735897.js"
import"./playerName-90c8eb43.js"
import"./asInt-371663d1.js"
import"./intValue-76dfee09.js"
import"./valueText-e4bbd7ea.js"
import"./interceptSubmit-6761ad9f.js"
import"./formToUrl-4962600c.js"
import"./fshOpen-90a0d847.js"
function J(t){let o,s,b,h,j,k,x,y,v,T,S,$,q,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),r(o,s),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),r(o,s),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=p(),j=e("button"),k=a(" "),x=p(),y=e("button"),v=a(" "),T=p(),S=e("button"),$=a(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),r(o,s),r(s,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,v),r(o,T),r(o,S),r(S,$),r(o,q),N&&N.m(o,null),r(o,w),A&&A.m(o,null),B||(I=[c(s,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(S,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,m(I)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),e=h("player_id")||j(),a=B()
function i(t){$("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),I(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${e}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,s,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-6c66bcda.js.map
