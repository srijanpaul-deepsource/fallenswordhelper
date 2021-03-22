import { z as getElementById, V as nowSecs, an as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-06ff1f7b.js';
import { i as injectArena } from './arena-a0052dd7.js';
import { s as set, g as get } from './idb-7e618446.js';
import './allthen-e8de2991.js';
import './all-3be74659.js';
import './closestTr-6b51642d.js';
import './closest-1ff01e01.js';
import './intValue-1ce02c09.js';
import './changeMinMax-51d14a10.js';
import './numberIsNaN-1e8b4508.js';
import './assets-716577f9.js';
import './lvlTests-c93b40e6.js';
import './interceptSubmit-b08c5c8c.js';
import './formToUrl-2c2f89f4.js';
import './loadDataTables-a96f3dd4.js';
import './currentGuildId-9f8192ef.js';
import './setTipped-b11fa6f8.js';

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
//# sourceMappingURL=arenaDoJoin-0a58dae1.js.map
