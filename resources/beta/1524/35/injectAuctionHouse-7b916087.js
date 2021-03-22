import{a as e}from"./allthen-e8de2991.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,an as l,u as c}from"./calfSystem-03050396.js"
import{c as m}from"./createSpan-8d9e047a.js"
import{d}from"./doStatTotal-5e9c51fd.js"
import{g as f}from"./getArrayByClassName-0b05e230.js"
import{i as p}from"./insertElementAfterBegin-ee5de178.js"
import"./all-3be74659.js"
import"./insertElementBefore-9228b012.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-7b916087.js.map
