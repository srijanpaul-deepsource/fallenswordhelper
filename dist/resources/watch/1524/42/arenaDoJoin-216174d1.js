import { z as getElementById, V as nowSecs, aw as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-78c09adf.js';
import { i as injectArena } from './arena-64d4d3e1.js';
import { s as set, g as get } from './idb-364f7bbb.js';
import './allthen-3a0631ad.js';
import './all-9f53e8b3.js';
import './closestTr-e379ffde.js';
import './closest-9a08f4fa.js';
import './intValue-9eb8a210.js';
import './changeMinMax-b261f8ce.js';
import './numberIsNaN-484c0124.js';
import './assets-62f5bf10.js';
import './lvlTests-5a9bbb7c.js';
import './interceptSubmit-415e0c7c.js';
import './formToUrl-82de8371.js';
import './loadDataTables-a50ce2bc.js';
import './currentGuildId-e33bea0b.js';
import './setTipped-1ee3895d.js';

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
//# sourceMappingURL=arenaDoJoin-216174d1.js.map
