import{a as e}from"./allthen-3a0631ad.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,au as c,u as l}from"./calfSystem-15b00143.js"
import{c as m}from"./createSpan-2658e7cc.js"
import{d}from"./doStatTotal-01cde801.js"
import{g as f}from"./getArrayByClassName-c7b90480.js"
import{i as u}from"./insertElementAfterBegin-6888d6e1.js"
import"./all-9f53e8b3.js"
import"./insertElementBefore-34b77984.js"
function p(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,p)}function j(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),u(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-9113c7ae.js.map
