import { q as extend } from './calfSystem-81938674.js';
import { g as guild } from './guild-3d197f1b.js';
import { d as dialog } from './dialog-17ce66e6.js';
import { i as indexAjaxJson } from './indexAjaxJson-4d37c260.js';

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
//# sourceMappingURL=takeItem-a37c51a4.js.map
