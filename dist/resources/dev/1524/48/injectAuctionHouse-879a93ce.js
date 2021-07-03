import{a as t}from"./allthen-d828bb84.js"
import{y as e,p as a,z as n,ad as s,o as i,I as r,R as o,aC as c,u as l}from"./calfSystem-01849445.js"
import{c as d}from"./createSpan-3a4a65d3.js"
import{d as f}from"./doStatTotal-20f2ac46.js"
import{g as m}from"./getArrayByClassName-da632221.js"
import{i as u}from"./insertElementAfterBegin-93df6fa4.js"
import"./all-f24d81d0.js"
import"./insertElementBefore-5adb1609.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=d({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),f())}export default j
//# sourceMappingURL=injectAuctionHouse-879a93ce.js.map
