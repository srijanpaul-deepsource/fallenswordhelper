import { q as extend } from './calfSystem-6b7d7ae6.js';
import { g as guild } from './guild-6d0bdaa5.js';
import { d as dialog } from './dialog-1254e587.js';
import { i as indexAjaxJson } from './indexAjaxJson-28a71ea6.js';

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
//# sourceMappingURL=takeItem-692a0c8d.js.map
