import{a as t}from"./allthen-d828bb84.js"
import{y as e,p as a,z as n,ab as s,o as i,I as r,Q as o,aA as c,u as l}from"./calfSystem-85fa6364.js"
import{c as f}from"./createSpan-54352f01.js"
import{d}from"./doStatTotal-40063ed2.js"
import{g as m}from"./getArrayByClassName-4fe5cf41.js"
import{i as u}from"./insertElementAfterBegin-fb8d21a6.js"
import"./all-f24d81d0.js"
import"./insertElementBefore-5adb1609.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-8fbcf8cd.js.map
