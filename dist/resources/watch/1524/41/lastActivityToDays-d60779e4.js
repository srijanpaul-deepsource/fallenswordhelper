import { $ as $dataAccess, V as nowSecs } from './calfSystem-6b7d7ae6.js';
import { g as guild } from './guild-6d0bdaa5.js';
import { c as currentGuildId } from './currentGuildId-28c6d524.js';
import { g as guildView } from './guildView-32ed6738.js';

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
//# sourceMappingURL=lastActivityToDays-d60779e4.js.map
