import { d as dialog } from './dialog-17ce66e6.js';
import { i as indexAjaxJson } from './indexAjaxJson-4d37c260.js';
import { d as daUseItem } from './daUseItem-7d85790b.js';
import { e as errorDialog } from './errorDialog-58b05366.js';

function equipItem(backpackInvId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'equipitem',
    inventory_id: backpackInvId,
    ajax: 1,
  }).then(dialog);
}

const ajaxReturnCode = (json) => ({
  ...json,
  r: json.s ? 0 : 1,
});

function useItem(backpackInvId) {
  return daUseItem(backpackInvId).then(errorDialog).then(ajaxReturnCode);
}

export { ajaxReturnCode as a, equipItem as e, useItem as u };
//# sourceMappingURL=useItem-a071de62.js.map
