import { I as getValue, $ as $dataAccess } from './calfSystem-78c09adf.js';
import { s as senditems, a as senditems$1 } from './sendItems-c77d1b6f.js';

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
//# sourceMappingURL=daAjaxSendItemsToRecipient-108fd137.js.map
