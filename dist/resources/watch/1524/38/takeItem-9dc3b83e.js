import { q as extend } from './calfSystem-a8d6dd2c.js';
import { g as guild } from './guild-0154403b.js';
import { d as dialog } from './dialog-e89b7ecf.js';
import { i as indexAjaxJson } from './indexAjaxJson-8015c666.js';

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
//# sourceMappingURL=takeItem-9dc3b83e.js.map
