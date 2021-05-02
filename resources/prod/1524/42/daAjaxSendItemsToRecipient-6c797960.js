import{x as t,I as e,u as n,$ as r}from"./calfSystem-15b00143.js"
import{h as s}from"./htmlResult-fa6afb78.js"
function a(n){return function(e,n){return t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,items:n})}(e("itemRecipient"),n)}function i(t){return function(t,e){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,sendItemList:e}).then(s)}(e("itemRecipient"),t)}function m(t){return r(a,i,t)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-6c797960.js.map
