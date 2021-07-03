import { c as calf } from './calfSystem-2bd62864.js';
import { g as guildStore } from './guildStore-21c89247.js';
import { c as cmdExport } from './cmdExport-690117da.js';

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
//# sourceMappingURL=getInventory-12da4f84.js.map
