import{x as t,I as e,u as n,$ as r}from"./calfSystem-587dd8d3.js"
import{h as s}from"./htmlResult-81323754.js"
function i(n){return function(e,n){return t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,items:n})}(e("itemRecipient"),n)}function m(t){return function(t,e){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,sendItemList:e}).then(s)}(e("itemRecipient"),t)}function a(t){return r(i,m,t)}export{a as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-8d0d55a6.js.map
