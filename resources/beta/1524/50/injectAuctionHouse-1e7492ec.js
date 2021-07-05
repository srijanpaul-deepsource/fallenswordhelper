import{a as t}from"./allthen-2ff5fddb.js"
import{y as e,p as a,z as n,ac as s,o as i,I as r,Q as o,aB as c,u as l}from"./calfSystem-617f9a5d.js"
import{c as f}from"./createSpan-b1cc2640.js"
import{d}from"./doStatTotal-0ef44207.js"
import{g as m}from"./getArrayByClassName-3e46aa9a.js"
import{i as u}from"./insertElementAfterBegin-931665a2.js"
import"./all-9b215cd1.js"
import"./insertElementBefore-784d4581.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-1e7492ec.js.map
