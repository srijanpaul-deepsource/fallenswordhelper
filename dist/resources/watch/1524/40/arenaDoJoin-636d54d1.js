import { z as getElementById, V as nowSecs, av as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-81938674.js';
import { i as injectArena } from './arena-1147807f.js';
import { s as set, g as get } from './idb-5e72df32.js';
import './allthen-7b3f20e7.js';
import './all-be4763d3.js';
import './closestTr-60a08a8f.js';
import './closest-abbeba17.js';
import './intValue-e485889b.js';
import './changeMinMax-969ea6b3.js';
import './numberIsNaN-2764ce9c.js';
import './assets-5392162d.js';
import './lvlTests-da4f6583.js';
import './interceptSubmit-1acde52b.js';
import './formToUrl-822020a1.js';
import './loadDataTables-c0b48d0c.js';
import './currentGuildId-37902ad7.js';
import './setTipped-c42cf871.js';

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
//# sourceMappingURL=arenaDoJoin-636d54d1.js.map
