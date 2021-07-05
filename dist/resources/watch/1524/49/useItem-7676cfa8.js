import { d as dialog } from './dialog-7f115b68.js';
import { i as indexAjaxJson } from './indexAjaxJson-52989594.js';
import { d as daUseItem } from './daUseItem-0663b0ec.js';
import { e as errorDialog } from './errorDialog-43809bd1.js';

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
//# sourceMappingURL=useItem-7676cfa8.js.map
