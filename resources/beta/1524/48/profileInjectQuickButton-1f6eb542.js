import{S as t,i as o,s as a,b as s,t as e,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-2f0e5ca2.js"
import{I as d,c as b,R as h,aL as j,aB as g,cc as k,N as x,cd as y,ak as v,bI as T,s as S,S as $,D as q}from"./calfSystem-8af1dca2.js"
import{c as G}from"./currentGuildId-ae75dbfc.js"
import{a as w}from"./getIsOwnGuild-53994452.js"
import{a as B}from"./profile-5e47c648.js"
import{o as I}from"./openQuickBuffByName-ad6d10b7.js"
import"./colouredDots-3e58d691.js"
import"./batch-891ec1a6.js"
import"./onlineDot-bb9216af.js"
import"./doStatTotal-2b938864.js"
import"./executeAll-ff401d51.js"
import"./playerName-7218c72a.js"
import"./asInt-74ac71c8.js"
import"./intValue-9eb5015a.js"
import"./valueText-ad23c08d.js"
import"./interceptSubmit-57af03dc.js"
import"./formToUrl-71081055.js"
import"./fshOpen-b549d330.js"
function J(t){let o,a,b,h,j,k,x,y,v,T,S,$,q,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,a,p,m
return{c(){o=s("button"),a=e(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,e){n(s,o,e),c(o,a),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,a,p,m
return{c(){o=s("button"),a=e(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,e){n(s,o,e),c(o,a),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),a=s("button"),b=e(" "),h=p(),j=s("button"),k=e(" "),x=p(),y=s("button"),v=e(" "),T=p(),S=s("button"),$=e(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(a,"class","fshQuickBuff svelte-1xo8gqh"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(s,e){n(s,o,e),c(o,a),c(a,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),B||(I=[r(a,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,m(I)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",a=w(),s=h("player_id")||j(),e=B()
function i(t){$("profile","quick button",t)}return[o,a,e,function(t){t.target.blur(),i("quickbuff"),I(e)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${e}`)},function(){i("recall items"),x(`${T}${e}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,a,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-1f6eb542.js.map
