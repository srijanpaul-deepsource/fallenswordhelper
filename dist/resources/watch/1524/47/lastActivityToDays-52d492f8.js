import { $ as $dataAccess, V as nowSecs } from './calfSystem-7a121553.js';
import { g as guild } from './guild-646c8288.js';
import { c as currentGuildId } from './currentGuildId-463e8056.js';
import { g as guildView } from './guildView-fc7cb7ea.js';

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
//# sourceMappingURL=lastActivityToDays-52d492f8.js.map
