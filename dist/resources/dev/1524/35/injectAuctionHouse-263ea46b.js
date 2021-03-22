import{a as e}from"./allthen-e8de2991.js"
import{y as t,p as a,z as n,ab as s,o as i,I as o,S as r,ao as l,u as c}from"./calfSystem-186455ab.js"
import{c as m}from"./createSpan-8048fffb.js"
import{d as f}from"./doStatTotal-79b45123.js"
import{g as d}from"./getArrayByClassName-0545a3cf.js"
import{i as p}from"./insertElementAfterBegin-22d97b25.js"
import"./all-3be74659.js"
import"./insertElementBefore-9228b012.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function g(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-263ea46b.js.map
