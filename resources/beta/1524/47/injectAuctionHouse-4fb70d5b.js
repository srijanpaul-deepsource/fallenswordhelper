import{a as e}from"./allthen-2719c129.js"
import{y as t,p as a,z as n,ab as s,o as i,I as r,Q as o,aA as c,u as l}from"./calfSystem-db2edbef.js"
import{c as d}from"./createSpan-8ddb7122.js"
import{d as m}from"./doStatTotal-3ad45754.js"
import{g as f}from"./getArrayByClassName-e5960a90.js"
import{i as u}from"./insertElementAfterBegin-9758a790.js"
import"./all-ceaf9817.js"
import"./insertElementBefore-165ce171.js"
function p(){o(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,p)}function j(){!t()&&a&&(!function(){const e=n("fill")
if(!e)return
const t=d({className:"smallLink",textContent:"Cancel All"}),a=e.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,t),s(a,"["),i(t,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-4fb70d5b.js.map
