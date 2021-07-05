import { I as getValue, $ as $dataAccess } from './calfSystem-8168cf6d.js';
import { s as senditems, a as senditems$1 } from './sendItems-d0203c55.js';

function sendItemsToRecipient$1(invIdAry) {
  return senditems(getValue('itemRecipient'), invIdAry);
}

function sendItemsToRecipient(invIdAry) {
  return senditems$1(getValue('itemRecipient'), invIdAry);
}

function daAjaxSendItemsToRecipient(invIdAry) {
  return $dataAccess(sendItemsToRecipient$1, sendItemsToRecipient, invIdAry);
}

export { daAjaxSendItemsToRecipient as d };
//# sourceMappingURL=daAjaxSendItemsToRecipient-c0066fa7.js.map
