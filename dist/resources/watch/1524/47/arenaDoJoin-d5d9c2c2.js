import { z as getElementById, V as nowSecs, aA as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-7a121553.js';
import { i as injectArena } from './arena-deb2750a.js';
import { s as set, g as get } from './idb-a4bd5e0c.js';
import './allthen-2719c129.js';
import './all-ceaf9817.js';
import './closestTr-0db8644e.js';
import './closest-4542e515.js';
import './intValue-e4ce6bb5.js';
import './changeMinMax-53cfdc4f.js';
import './numberIsNaN-2f104aa2.js';
import './assets-e9494ccd.js';
import './lvlTests-7bdb261a.js';
import './interceptSubmit-59d68b59.js';
import './formToUrl-c26b8bfa.js';
import './loadDataTables-401ba72c.js';
import './currentGuildId-463e8056.js';
import './setTipped-27e246a8.js';

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
//# sourceMappingURL=arenaDoJoin-d5d9c2c2.js.map
