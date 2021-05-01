import { d as dialog } from './dialog-1254e587.js';
import { i as indexAjaxJson } from './indexAjaxJson-28a71ea6.js';
import { d as daUseItem } from './daUseItem-5c4e67fc.js';
import { e as errorDialog } from './errorDialog-864e4ba8.js';

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
//# sourceMappingURL=useItem-55cb2b5f.js.map
