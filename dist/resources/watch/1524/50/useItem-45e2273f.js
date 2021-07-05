import { d as dialog } from './dialog-7b91fd18.js';
import { i as indexAjaxJson } from './indexAjaxJson-8e794cab.js';
import { d as daUseItem } from './daUseItem-4a1eec34.js';
import { e as errorDialog } from './errorDialog-ead3508a.js';

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
//# sourceMappingURL=useItem-45e2273f.js.map
