import { $ as $dataAccess, V as nowSecs } from './calfSystem-579856fa.js';
import { g as guild } from './guild-2103fb7f.js';
import { c as currentGuildId } from './currentGuildId-060704b6.js';
import { g as guildView } from './guildView-14af3cb4.js';

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
//# sourceMappingURL=lastActivityToDays-607a9014.js.map
