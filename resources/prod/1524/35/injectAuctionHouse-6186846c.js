import{a as e}from"./allthen-e8de2991.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,al as c,u as l}from"./calfSystem-fe0ebf32.js"
import{c as f}from"./createSpan-0da61261.js"
import{d as m}from"./doStatTotal-fd9f8e0b.js"
import{g as d}from"./getArrayByClassName-7dbc6c3a.js"
import{i as p}from"./insertElementAfterBegin-eef98cf1.js"
import"./all-3be74659.js"
import"./insertElementBefore-9228b012.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=f({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-6186846c.js.map
