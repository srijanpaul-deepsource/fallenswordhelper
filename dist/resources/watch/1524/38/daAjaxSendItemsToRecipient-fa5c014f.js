import { I as getValue, $ as $dataAccess } from './calfSystem-a8d6dd2c.js';
import { s as senditems, a as senditems$1 } from './sendItems-2114f7d0.js';

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
//# sourceMappingURL=daAjaxSendItemsToRecipient-fa5c014f.js.map
