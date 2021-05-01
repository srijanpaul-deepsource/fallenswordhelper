import{a as t}from"./allthen-13a2ca46.js"
import{y as a,p as e,z as n,aa as s,o as i,I as o,R as r,au as c,u as l}from"./calfSystem-030d7057.js"
import{c as m}from"./createSpan-cbce88a2.js"
import{d as f}from"./doStatTotal-a31727af.js"
import{g as d}from"./getArrayByClassName-3714a576.js"
import{i as u}from"./insertElementAfterBegin-236f9295.js"
import"./all-73a73e22.js"
import"./insertElementBefore-2bf2da7f.js"
function p(){r(n("refresh"))}function h(t){const a=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(a.dataset.tipped)[1]})}function g(){const a=d("auctionCancel",n("resultRows"))
if(0===a.length)return
const e=a.map(h)
t(e,p)}function j(){!a()&&e&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),a=n("fill").parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,t),s(a,"["),i(t,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default j
//# sourceMappingURL=injectAuctionHouse-1962ad53.js.map
