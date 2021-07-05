import{S as t,i as o,s,b as e,t as a,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-c7b13239.js"
import{I as d,c as b,R as h,aL as j,aB as g,cc as k,N as x,cd as y,ak as v,bI as T,s as S,S as $,D as q}from"./calfSystem-42f137cb.js"
import{c as G}from"./currentGuildId-d1f28a3b.js"
import{a as w}from"./getIsOwnGuild-8d854d47.js"
import{a as B}from"./profile-e3fa1612.js"
import{o as I}from"./openQuickBuffByName-ca011f73.js"
import"./colouredDots-716e3036.js"
import"./batch-3140b873.js"
import"./onlineDot-634e49ca.js"
import"./doStatTotal-10fb589c.js"
import"./executeAll-779c0127.js"
import"./playerName-e12b866a.js"
import"./asInt-ddca3e00.js"
import"./intValue-f11572ef.js"
import"./valueText-17fb88d7.js"
import"./interceptSubmit-b85719fa.js"
import"./formToUrl-869dd05e.js"
import"./fshOpen-c207a52b.js"
function J(t){let o,s,b,h,j,k,x,y,v,T,S,$,q,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=p(),j=e("button"),k=a(" "),x=p(),y=e("button"),v=a(" "),T=p(),S=e("button"),$=a(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),B||(I=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,m(I)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),e=h("player_id")||j(),a=B()
function i(t){$("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),I(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${e}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,s,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-b5a4e403.js.map
