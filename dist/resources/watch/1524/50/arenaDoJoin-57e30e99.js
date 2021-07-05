import { z as getElementById, V as nowSecs, aB as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-8168cf6d.js';
import { i as injectArena } from './arena-cce6629a.js';
import { s as set, g as get } from './idb-d2486026.js';
import './allthen-2ff5fddb.js';
import './all-9b215cd1.js';
import './closestTr-d78cbeea.js';
import './closest-06418423.js';
import './intValue-76dfee09.js';
import './changeMinMax-5835769c.js';
import './numberIsNaN-bf55a311.js';
import './assets-64d5f82f.js';
import './lvlTests-5c6305cd.js';
import './interceptSubmit-cdb0adf0.js';
import './formToUrl-1b542ce2.js';
import './loadDataTables-da90f31c.js';
import './currentGuildId-c09348df.js';
import './setTipped-5e35ee46.js';

function addId(id, obj) {
  const newObj = obj || {};
  newObj[id] = nowSecs;
  set('fsh_arenaFull', newObj);
}

function maxMoves(thisInfo) {
  return thisInfo && thisInfo.includes('combat move');
}

function yourGuild(thisInfo) {
  return thisInfo && thisInfo.includes('your guild');
}

function evalMsg() {
  const thisInfo = infoBox();
  if (maxMoves(thisInfo)) { return; }
  if (yourGuild(thisInfo)) {
    const thisId = querySelector('#pCC input[name="pvp_id"]').value;
    get('fsh_arenaFull').then(partial(addId, thisId));
  } else {
    sendEvent('arena', 'doJoin', thisInfo);
  }
}

function arenaDoJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    evalMsg();
  }
}

export default arenaDoJoin;
//# sourceMappingURL=arenaDoJoin-57e30e99.js.map
