import { z as getElementById, V as nowSecs, aB as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-579856fa.js';
import { i as injectArena } from './arena-4ef7ca1c.js';
import { s as set, g as get } from './idb-597cc5e6.js';
import './allthen-f7cedfa7.js';
import './all-bb953856.js';
import './closestTr-f3bfdd2c.js';
import './closest-0e1c7a1d.js';
import './intValue-f11572ef.js';
import './changeMinMax-98de10ec.js';
import './numberIsNaN-9a364388.js';
import './assets-f2535d93.js';
import './lvlTests-ad5cbf27.js';
import './interceptSubmit-9bdd8d86.js';
import './formToUrl-72736914.js';
import './loadDataTables-5f2aa363.js';
import './currentGuildId-060704b6.js';
import './setTipped-11c01061.js';

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
//# sourceMappingURL=arenaDoJoin-09544cec.js.map
