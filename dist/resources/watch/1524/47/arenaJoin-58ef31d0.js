import { S as getUrlParameter, b as createDiv, i as insertElement, f as insertHtmlBeforeEnd, aB as cdn, B as setInnerHtml, s as partial, k as on, E as querySelector, z as getElementById } from './calfSystem-7a121553.js';
import { a as arena, i as injectArena, v as view } from './arena-deb2750a.js';
import { i as interceptSubmit } from './interceptSubmit-59d68b59.js';
import { a as addCommas } from './addCommas-27b35f1c.js';
import { c as createSelect } from './createSelect-4874c982.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2e575b9d.js';
import { i as isSelected } from './isSelected-a02583fd.js';
import './allthen-2719c129.js';
import './all-ceaf9817.js';
import './closestTr-0db8644e.js';
import './closest-4542e515.js';
import './idb-a4bd5e0c.js';
import './intValue-e4ce6bb5.js';
import './changeMinMax-53cfdc4f.js';
import './numberIsNaN-2f104aa2.js';
import './assets-e9494ccd.js';
import './lvlTests-7bdb261a.js';
import './loadDataTables-401ba72c.js';
import './currentGuildId-463e8056.js';
import './setTipped-27e246a8.js';
import './formToUrl-c26b8bfa.js';
import './insertElementBefore-165ce171.js';

var css = ".moveImg {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\n\n.flex {\n  align-items: center;\n  display: flex;\n  justify-content: center\n}\n\n.flex div {padding: 2px;}\n";
var modules_54fe6fde = {};

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
//# sourceMappingURL=arenaJoin-58ef31d0.js.map
