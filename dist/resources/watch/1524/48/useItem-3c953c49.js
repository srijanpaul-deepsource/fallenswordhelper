import { d as dialog } from './dialog-3056695b.js';
import { i as indexAjaxJson } from './indexAjaxJson-ff53f4ae.js';
import { d as daUseItem } from './daUseItem-4d663d19.js';
import { e as errorDialog } from './errorDialog-ca40a194.js';

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
//# sourceMappingURL=useItem-3c953c49.js.map
