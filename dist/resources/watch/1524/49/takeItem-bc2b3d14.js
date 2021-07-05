import { q as extend } from './calfSystem-579856fa.js';
import { g as guild } from './guild-2103fb7f.js';
import { d as dialog } from './dialog-7f115b68.js';
import { i as indexAjaxJson } from './indexAjaxJson-52989594.js';

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
//# sourceMappingURL=takeItem-bc2b3d14.js.map
