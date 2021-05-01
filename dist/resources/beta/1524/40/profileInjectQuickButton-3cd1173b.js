import{S as t,i as o,s,e,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-b63851a0.js"
import{I as d,S as b,aE as h,av as g,c as j,c8 as k,O as x,c9 as y,bM as v,bB as T,s as q,W as S,D as $}from"./calfSystem-ab393688.js"
import{c as G}from"./currentGuildId-0cbe4e98.js"
import{a as w}from"./getIsOwnGuild-80c7f46f.js"
import{a as B}from"./profile-0302cd61.js"
import{o as J}from"./openQuickBuffByName-a32a2b4a.js"
import"./colouredDots-3fcd5994.js"
import"./batch-389838cb.js"
import"./onlineDot-c57058d1.js"
import"./doStatTotal-35ff7e6d.js"
import"./executeAll-6bc810f1.js"
import"./playerName-17cbc946.js"
import"./intValue-e485889b.js"
import"./valueText-d39824a3.js"
import"./interceptSubmit-02037ff6.js"
import"./formToUrl-96c1fd67.js"
import"./fshOpen-9656868c.js"
function A(t){let o,s,b,h,j,k,x,y,v,T,q,S,$,w,B,J,A=t[1]&&d("showAdmin"),D=t[1]&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),I=A&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=p(),j=e("button"),k=a(" "),x=p(),y=e("button"),v=a(" "),T=p(),q=e("button"),S=a(" "),$=p(),D&&D.c(),w=p(),I&&I.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,q),c(q,S),c(o,$),D&&D.m(o,null),c(o,w),I&&I.m(o,null),B||(J=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&D.p(t,o),A&&I.p(t,o)},i:l,o:l,d(t){t&&u(o),D&&D.d(),I&&I.d(),B=!1,m(J)}}}function D(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",s=w(),e=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${e}`)}]}class I extends t{constructor(t){super(),o(this,t,D,A,s,{})}}function M(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new I({anchor:t.nextElementSibling,target:t.parentNode})}export default M
//# sourceMappingURL=profileInjectQuickButton-3cd1173b.js.map
