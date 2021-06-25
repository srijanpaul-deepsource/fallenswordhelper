import { c as calf } from './calfSystem-7a121553.js';
import { g as guildStore } from './guildStore-0480f7b1.js';
import { c as cmdExport } from './cmdExport-3ffe3d8a.js';

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
//# sourceMappingURL=getInventory-b9d8aed6.js.map
