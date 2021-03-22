import { q as extend } from './calfSystem-06ff1f7b.js';
import { g as guild } from './guild-3d9aec92.js';
import { d as dialog } from './dialog-bd85dd64.js';
import { i as indexAjaxJson } from './indexAjaxJson-d3f06031.js';

function guildInventory(data) {
  return guild(extend({ subcmd: 'inventory' }, data));
}

function takeItem(invId) {
  return indexAjaxJson({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'takeitem',
    guildstore_id: invId,
    ajax: 1,
  }).then(dialog);
}

export { guildInventory as g, takeItem as t };
//# sourceMappingURL=takeItem-1a094b82.js.map
