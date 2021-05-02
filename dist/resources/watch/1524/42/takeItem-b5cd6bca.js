import { q as extend } from './calfSystem-78c09adf.js';
import { g as guild } from './guild-b7f81ebd.js';
import { d as dialog } from './dialog-aad1c6e1.js';
import { i as indexAjaxJson } from './indexAjaxJson-d434bd9e.js';

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
//# sourceMappingURL=takeItem-b5cd6bca.js.map
