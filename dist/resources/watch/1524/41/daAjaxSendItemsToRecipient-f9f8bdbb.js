import { I as getValue, $ as $dataAccess } from './calfSystem-6b7d7ae6.js';
import { s as senditems, a as senditems$1 } from './sendItems-cfdc4656.js';

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
//# sourceMappingURL=daAjaxSendItemsToRecipient-f9f8bdbb.js.map
