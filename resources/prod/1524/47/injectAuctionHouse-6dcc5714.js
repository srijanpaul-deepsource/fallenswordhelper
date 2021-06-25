import{a as t}from"./allthen-2719c129.js"
import{y as e,p as a,z as n,ab as s,o as i,I as r,Q as o,ay as c,u as l}from"./calfSystem-a2fd9017.js"
import{c as d}from"./createSpan-42da4831.js"
import{d as f}from"./doStatTotal-7cdd55ce.js"
import{g as m}from"./getArrayByClassName-44af3bfd.js"
import{i as u}from"./insertElementAfterBegin-0945414a.js"
import"./all-ceaf9817.js"
import"./insertElementBefore-165ce171.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=d({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),f())}export default j
//# sourceMappingURL=injectAuctionHouse-6dcc5714.js.map
