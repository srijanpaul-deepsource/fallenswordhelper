import { S as getUrlParameter, b as createDiv, i as insertElement, f as insertHtmlBeforeEnd, aC as cdn, B as setInnerHtml, s as partial, k as on, E as querySelector, z as getElementById } from './calfSystem-2bd62864.js';
import { a as arena, i as injectArena, v as view } from './arena-9b1f6fd4.js';
import { i as interceptSubmit } from './interceptSubmit-f4d0267f.js';
import { a as addCommas } from './addCommas-5de3e9c4.js';
import { c as createSelect } from './createSelect-2b8fa4fa.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-ac52300a.js';
import { i as isSelected } from './isSelected-77d835f5.js';
import './allthen-d828bb84.js';
import './all-f24d81d0.js';
import './closestTr-1a0e55da.js';
import './closest-3a475e96.js';
import './idb-9e22c871.js';
import './intValue-9eb5015a.js';
import './changeMinMax-6a9eb8c2.js';
import './numberIsNaN-68797c81.js';
import './assets-7b5d479d.js';
import './lvlTests-d0abbbc5.js';
import './loadDataTables-d95c47fb.js';
import './currentGuildId-df5d894a.js';
import './setTipped-71facd91.js';
import './formToUrl-fa381d4d.js';
import './insertElementBefore-5adb1609.js';

var css = ".moveImg {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\n\n.flex {\n  align-items: center;\n  display: flex;\n  justify-content: center\n}\n\n.flex div {padding: 2px;}\n";
var modules_04d7a0ac = {};

const thisTournament = () => Number(getUrlParameter('pvp_id'));

function findArena(r) {
  const tourney = thisTournament();
  return r.arenas.find((e) => e.id === tourney);
}

function usesetup(setId) {
  return arena({ subcmd: 'usesetup', set_id: setId });
}

let moveContainer;

function getContainer(movesController) {
  if (!moveContainer) {
    moveContainer = insertElement(movesController, createDiv());
  }
  return moveContainer;
}

function injectImg(container, id) {
  let move = String(id - 1);
  if (id === 0) { move = 'x'; }
  insertHtmlBeforeEnd(container,
    `<img src="${cdn}arena/${move}.png" class="moveImg">`);
}

function thisOptions(currentSet, e) {
  return `<option value="${String(e.id)}"${
    isSelected(currentSet.slots.join(), e.slots.join())}>${e.name}</option>`;
}

function doMoves(thisSet, movesController) {
  const container = getContainer(movesController);
  setInnerHtml('', container);
  thisSet.slots.forEach(partial(injectImg, container));
}

function doChange(movesController, evt, thisSet) {
  usesetup(evt.target.value).then((json) => {
    if (json.s) {
      doMoves(thisSet, movesController);
    }
  });
}

function onchange(r, movesController, evt) {
  const thisSet = r.sets.find((e) => e.id === Number(evt.target.value));
  if (thisSet) { doChange(movesController, evt, thisSet); }
}

function doSelect(r, movesController) {
  if (r.sets.length > 0) {
    const thisSelect = createSelect({
      innerHTML: r.sets.map(partial(thisOptions, r.current_set))
        .join(''),
    });
    on(thisSelect, 'change', partial(onchange, r, movesController));
    const div = createDiv({ className: 'flex' });
    insertElement(div, thisSelect);
    insertElementAfterBegin(movesController, div);
  }
}

function showMoves(r, thisCell, thisArena) {
  if (thisArena.specials) {
    const movesController = createDiv({ className: 'flex' });
    doSelect(r, movesController);
    doMoves(r.current_set, movesController);
    insertElement(thisCell, movesController);
  }
}

const boolToString = (e) => String(Number(e));

function param(label, value) {
  return `<div><div>${label}</div><div><img src="${cdn
  }ui/arena/specials_${boolToString(value)}.png"></div></div>`;
}

function paramBox(thisArena) {
  return `<div class="flex"><div><div>Players</div><div>${
    thisArena.players.length} / ${thisArena.max_players}</div></div>${
    param('Specials', thisArena.specials)}${
    param('Hell Forge', thisArena.hellforge)}${
    param('Epic', thisArena.epic)}<div><div>Max Equip Level</div><div>${
    addCommas(thisArena.equip_level)}</div></div></div>`;
}

function showAttribs(json) {
  const thisCell = querySelector('#pCC > form > table tr:nth-of-type(4) td');
  if (json.r && thisCell) {
    thisCell.setAttribute('align', 'center');
    const thisArena = findArena(json.r);
    insertHtmlBeforeEnd(thisCell, paramBox(thisArena));
    showMoves(json.r, thisCell, thisArena);
  }
}

function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    interceptSubmit();
    view().catch(() => ({})).then(showAttribs);
  }
}

export default arenaJoin;
//# sourceMappingURL=arenaJoin-26ea4771.js.map
