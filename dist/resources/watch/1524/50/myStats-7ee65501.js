import { a9 as now, c as calf } from './calfSystem-8168cf6d.js';
import { g as getProfile } from './getProfile-fa8e82d0.js';
import { p as playerName } from './playerName-7c57da4d.js';
import { g as get, s as set } from './idb-d2486026.js';

function sendMyProfileToForage(data) {
  set('fsh_selfProfile', data);
  return data;
}

function addLastUpdateDate(data) {
  if (data) {
    return { ...data, lastUpdate: now };
  }
  return data;
}

function getMyProfile() {
  return getProfile(playerName())
    .then(addLastUpdateDate)
    .then(sendMyProfileToForage);
}

function getProfileFromForage(data) {
  if (!data || data.lastUpdate < now - calf.allyEnemyOnlineRefreshTime) {
    return getMyProfile();
  }
  return data;
}

function myStats(force) {
  if (force) { return getMyProfile(); }
  return get('fsh_selfProfile')
    .then(getProfileFromForage);
}

export { myStats as m };
//# sourceMappingURL=myStats-7ee65501.js.map
