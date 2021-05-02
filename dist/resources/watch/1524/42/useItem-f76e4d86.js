import { d as dialog } from './dialog-aad1c6e1.js';
import { i as indexAjaxJson } from './indexAjaxJson-d434bd9e.js';
import { d as daUseItem } from './daUseItem-9c9cedff.js';
import { e as errorDialog } from './errorDialog-14a51b34.js';

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
//# sourceMappingURL=useItem-f76e4d86.js.map
