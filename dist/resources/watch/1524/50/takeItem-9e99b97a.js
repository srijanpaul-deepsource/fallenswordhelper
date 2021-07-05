import { q as extend } from './calfSystem-8168cf6d.js';
import { g as guild } from './guild-d859328c.js';
import { d as dialog } from './dialog-7b91fd18.js';
import { i as indexAjaxJson } from './indexAjaxJson-8e794cab.js';

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
//# sourceMappingURL=takeItem-9e99b97a.js.map
