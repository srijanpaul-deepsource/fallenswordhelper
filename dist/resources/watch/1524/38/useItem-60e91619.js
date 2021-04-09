import { d as dialog } from './dialog-e89b7ecf.js';
import { i as indexAjaxJson } from './indexAjaxJson-8015c666.js';
import { d as daUseItem } from './daUseItem-bdb08705.js';
import { e as errorDialog } from './errorDialog-f60f17b2.js';

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
//# sourceMappingURL=useItem-60e91619.js.map
