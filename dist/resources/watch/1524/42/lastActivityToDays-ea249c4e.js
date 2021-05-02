import { $ as $dataAccess, V as nowSecs } from './calfSystem-78c09adf.js';
import { g as guild } from './guild-b7f81ebd.js';
import { c as currentGuildId } from './currentGuildId-e33bea0b.js';
import { g as guildView } from './guildView-64bfcac8.js';

let cache;

function guildManage$1() {
  if (!cache) {
    cache = guild({ subcmd: 'manage' });
  }
  return cache;
}

// Incomplete
function guildManage() {
  const guildId = currentGuildId();
  if (guildId) {
    return guildView(currentGuildId());
  }
  return Promise.reject(new Error('no guild id'));
}

function daGuildManage() {
  return $dataAccess(guildManage$1, guildManage);
}

function lastActivityToDays(lastActivity) {
  return Math.floor(Math.max(0, nowSecs - lastActivity) / 86400);
}

export { daGuildManage as d, lastActivityToDays as l };
//# sourceMappingURL=lastActivityToDays-ea249c4e.js.map
