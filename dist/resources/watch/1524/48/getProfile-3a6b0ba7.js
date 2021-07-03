import { c as cmdExport } from './cmdExport-690117da.js';

const cache = {};

function profile(username) {
  // return cmdExport({player_username: username, subcmd: 'profile'});
  if (!cache[username]) {
    cache[username] = cmdExport({ player_username: username, subcmd: 'profile' });
  }
  return cache[username];
}

function getProfile(username) {
  return profile(username);
}

export { getProfile as g };
//# sourceMappingURL=getProfile-3a6b0ba7.js.map
