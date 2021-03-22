import { c as calf } from './calfSystem-06ff1f7b.js';
import { g as guildStore } from './guildStore-4c8301e1.js';
import { c as cmdExport } from './cmdExport-a7eb27a8.js';

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
//# sourceMappingURL=getInventory-9828133d.js.map
