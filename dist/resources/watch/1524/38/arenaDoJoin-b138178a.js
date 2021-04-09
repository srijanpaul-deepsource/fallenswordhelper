import { z as getElementById, V as nowSecs, an as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-a8d6dd2c.js';
import { i as injectArena } from './arena-569f1af8.js';
import { s as set, g as get } from './idb-84403669.js';
import './allthen-8480e63e.js';
import './all-edb79f43.js';
import './closestTr-a3997399.js';
import './closest-4ebdb6d3.js';
import './intValue-ba9b9e5a.js';
import './changeMinMax-a6e17992.js';
import './numberIsNaN-30cde299.js';
import './assets-40e3d434.js';
import './lvlTests-598b44d1.js';
import './interceptSubmit-b6bcec0e.js';
import './formToUrl-438642ae.js';
import './loadDataTables-eca71037.js';
import './currentGuildId-100aa801.js';
import './setTipped-f59a320f.js';

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
//# sourceMappingURL=arenaDoJoin-b138178a.js.map
