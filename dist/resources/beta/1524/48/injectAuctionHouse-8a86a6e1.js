import{a as t}from"./allthen-d828bb84.js"
import{y as e,p as a,z as n,ac as s,o as i,I as r,Q as o,aB as c,u as l}from"./calfSystem-8af1dca2.js"
import{c as d}from"./createSpan-0e686680.js"
import{d as m}from"./doStatTotal-2b938864.js"
import{g as f}from"./getArrayByClassName-11de01ae.js"
import{i as u}from"./insertElementAfterBegin-a140326f.js"
import"./all-f24d81d0.js"
import"./insertElementBefore-5adb1609.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=f("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=d({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-8a86a6e1.js.map
