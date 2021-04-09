import { c as calf } from './calfSystem-a8d6dd2c.js';
import { g as guildStore } from './guildStore-b8fd3983.js';
import { c as cmdExport } from './cmdExport-15090460.js';

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
//# sourceMappingURL=getInventory-20ca39cb.js.map
