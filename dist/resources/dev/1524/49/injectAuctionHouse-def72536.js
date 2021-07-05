import{a as t}from"./allthen-f7cedfa7.js"
import{y as e,p as a,z as n,ad as s,o as i,I as r,R as o,aC as c,u as l}from"./calfSystem-9ab64478.js"
import{c as f}from"./createSpan-7ce539c8.js"
import{d as m}from"./doStatTotal-d0bf467a.js"
import{g as d}from"./getArrayByClassName-a799501a.js"
import{i as u}from"./insertElementAfterBegin-ff2c1da5.js"
import"./all-bb953856.js"
import"./insertElementBefore-c7161beb.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function g(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-def72536.js.map
