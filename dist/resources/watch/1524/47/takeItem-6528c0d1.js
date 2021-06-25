import { q as extend } from './calfSystem-7a121553.js';
import { g as guild } from './guild-646c8288.js';
import { d as dialog } from './dialog-a4dfa31d.js';
import { i as indexAjaxJson } from './indexAjaxJson-0d19fdb7.js';

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
//# sourceMappingURL=takeItem-6528c0d1.js.map
