import { $ as $dataAccess, V as nowSecs } from './calfSystem-a8d6dd2c.js';
import { g as guild } from './guild-0154403b.js';
import { c as currentGuildId } from './currentGuildId-100aa801.js';
import { g as guildView } from './guildView-204031f2.js';

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
//# sourceMappingURL=lastActivityToDays-92ceaba7.js.map
