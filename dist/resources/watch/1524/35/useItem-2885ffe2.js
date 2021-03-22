import { d as dialog } from './dialog-bd85dd64.js';
import { i as indexAjaxJson } from './indexAjaxJson-d3f06031.js';
import { d as daUseItem } from './daUseItem-999d24f2.js';
import { e as errorDialog } from './errorDialog-f7744f6f.js';

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
//# sourceMappingURL=useItem-2885ffe2.js.map
