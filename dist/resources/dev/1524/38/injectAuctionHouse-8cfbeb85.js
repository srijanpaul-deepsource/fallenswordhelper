import{a as e}from"./allthen-8480e63e.js"
import{y as t,p as n,z as a,ab as s,o as i,I as o,S as r,an as c,u as l}from"./calfSystem-d56087e1.js"
import{c as m}from"./createSpan-65434787.js"
import{d}from"./doStatTotal-9c318ece.js"
import{g as f}from"./getArrayByClassName-e1c1fd86.js"
import{i as p}from"./insertElementAfterBegin-2d4418e8.js"
import"./all-edb79f43.js"
import"./insertElementBefore-71272774.js"
function u(){r(a("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",a("resultRows"))
if(0===t.length)return
const n=t.map(h)
e(n,u)}function j(){!t()&&n&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=a("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(a("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-8cfbeb85.js.map
