import { c as calf } from './calfSystem-81938674.js';
import { g as guildStore } from './guildStore-4ad27246.js';
import { c as cmdExport } from './cmdExport-a1f1ce94.js';

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
//# sourceMappingURL=getInventory-9df16d50.js.map
