import { $ as $dataAccess, V as nowSecs } from './calfSystem-06ff1f7b.js';
import { g as guild } from './guild-3d9aec92.js';
import { c as currentGuildId } from './currentGuildId-9f8192ef.js';
import { g as guildView } from './guildView-b0e4a1f2.js';

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
//# sourceMappingURL=lastActivityToDays-a29996a1.js.map
