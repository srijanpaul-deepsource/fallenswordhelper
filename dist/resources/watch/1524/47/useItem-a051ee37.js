import { d as dialog } from './dialog-a4dfa31d.js';
import { i as indexAjaxJson } from './indexAjaxJson-0d19fdb7.js';
import { d as daUseItem } from './daUseItem-744459c3.js';
import { e as errorDialog } from './errorDialog-1238d963.js';

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
//# sourceMappingURL=useItem-a051ee37.js.map
