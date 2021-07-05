import { c as calf } from './calfSystem-579856fa.js';
import { g as guildStore } from './guildStore-c695b19f.js';
import { c as cmdExport } from './cmdExport-2605a827.js';

function inventory() {
  return cmdExport({ subcmd: 'inventory' });
}

function getInventory() {
  if (calf.subcmd === 'guildinvmgr') {
    return guildStore();
  }
  return inventory();
}

export { getInventory as g };
//# sourceMappingURL=getInventory-54ac861e.js.map
