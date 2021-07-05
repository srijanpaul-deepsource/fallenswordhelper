import { $ as $dataAccess, V as nowSecs } from './calfSystem-8168cf6d.js';
import { g as guild } from './guild-d859328c.js';
import { c as currentGuildId } from './currentGuildId-c09348df.js';
import { g as guildView } from './guildView-3bff996f.js';

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
//# sourceMappingURL=lastActivityToDays-4198d677.js.map
