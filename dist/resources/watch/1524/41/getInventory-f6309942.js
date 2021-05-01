import { c as calf } from './calfSystem-6b7d7ae6.js';
import { g as guildStore } from './guildStore-38dc5e6b.js';
import { c as cmdExport } from './cmdExport-44d78de1.js';

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
//# sourceMappingURL=getInventory-f6309942.js.map
