import { c as calf } from './calfSystem-8168cf6d.js';
import { g as guildStore } from './guildStore-fc5461c1.js';
import { c as cmdExport } from './cmdExport-695e7790.js';

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
//# sourceMappingURL=getInventory-b80d3cb0.js.map
