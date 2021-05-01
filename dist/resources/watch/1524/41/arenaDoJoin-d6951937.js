import { z as getElementById, V as nowSecs, aw as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-6b7d7ae6.js';
import { i as injectArena } from './arena-60e92db8.js';
import { s as set, g as get } from './idb-abe33202.js';
import './allthen-13a2ca46.js';
import './all-73a73e22.js';
import './closestTr-51bdd54e.js';
import './closest-865e9de8.js';
import './intValue-af3aed3f.js';
import './changeMinMax-9818e713.js';
import './numberIsNaN-9d4c441b.js';
import './assets-cf4c1cc6.js';
import './lvlTests-6bb8260e.js';
import './interceptSubmit-b4b8e480.js';
import './formToUrl-aa363b07.js';
import './loadDataTables-3ca0a92d.js';
import './currentGuildId-28c6d524.js';
import './setTipped-2eacee59.js';

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
//# sourceMappingURL=arenaDoJoin-d6951937.js.map
