import { c as calf } from './calfSystem-78c09adf.js';
import { g as guildStore } from './guildStore-60869b3b.js';
import { c as cmdExport } from './cmdExport-fc81eff3.js';

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
//# sourceMappingURL=getInventory-3e8b0b60.js.map
