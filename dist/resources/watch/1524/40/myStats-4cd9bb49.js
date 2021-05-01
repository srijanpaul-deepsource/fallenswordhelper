import { a7 as now, c as calf } from './calfSystem-81938674.js';
import { g as getProfile } from './getProfile-d2aa2f11.js';
import { p as playerName } from './playerName-eb2e25a5.js';
import { g as get, s as set } from './idb-5e72df32.js';

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
//# sourceMappingURL=myStats-4cd9bb49.js.map
