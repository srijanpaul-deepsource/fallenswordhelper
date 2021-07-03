import { a9 as now, c as calf } from './calfSystem-2bd62864.js';
import { g as getProfile } from './getProfile-3a6b0ba7.js';
import { p as playerName } from './playerName-5ee9cf5c.js';
import { g as get, s as set } from './idb-9e22c871.js';

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
//# sourceMappingURL=myStats-dc60dbed.js.map
