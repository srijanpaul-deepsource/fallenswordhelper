import { $ as $dataAccess, V as nowSecs } from './calfSystem-2bd62864.js';
import { g as guild } from './guild-6d237a70.js';
import { c as currentGuildId } from './currentGuildId-df5d894a.js';
import { g as guildView } from './guildView-57b20b4d.js';

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
//# sourceMappingURL=lastActivityToDays-3e2a9c22.js.map
