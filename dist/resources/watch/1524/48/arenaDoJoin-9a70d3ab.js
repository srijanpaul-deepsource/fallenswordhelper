import { z as getElementById, V as nowSecs, aB as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-2bd62864.js';
import { i as injectArena } from './arena-9b1f6fd4.js';
import { s as set, g as get } from './idb-9e22c871.js';
import './allthen-d828bb84.js';
import './all-f24d81d0.js';
import './closestTr-1a0e55da.js';
import './closest-3a475e96.js';
import './intValue-9eb5015a.js';
import './changeMinMax-6a9eb8c2.js';
import './numberIsNaN-68797c81.js';
import './assets-7b5d479d.js';
import './lvlTests-d0abbbc5.js';
import './interceptSubmit-f4d0267f.js';
import './formToUrl-fa381d4d.js';
import './loadDataTables-d95c47fb.js';
import './currentGuildId-df5d894a.js';
import './setTipped-71facd91.js';

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
//# sourceMappingURL=arenaDoJoin-9a70d3ab.js.map
