import { q as extend } from './calfSystem-2bd62864.js';
import { g as guild } from './guild-6d237a70.js';
import { d as dialog } from './dialog-3056695b.js';
import { i as indexAjaxJson } from './indexAjaxJson-ff53f4ae.js';

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
//# sourceMappingURL=takeItem-b7a0e9a7.js.map
