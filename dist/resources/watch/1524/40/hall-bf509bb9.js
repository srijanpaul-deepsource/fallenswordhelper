import { c as collapse } from './collapse-3602cac6.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-81938674.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-42d16f41.js';
import './hideElement-512851a2.js';
import './toggleForce-4ff42c01.js';
import './isChecked-a9c3c9fe.js';

var css = ".fshHallPref {\n  position: absolute;\n  right: 1em;\n  top: 0.2em;\n}\n";
var modules_f2f10a1c = {};

function testArticle(rowType) { return rowType === 1; }

function setupPref(prefName, injector) {
  const flDiv = createDiv({
    className: 'fshHallPref',
    innerHTML: simpleCheckboxHtml(prefName),
  });
  injector.classList.add('fshRelative');
  insertElement(injector, flDiv);
}

function guildHall() {
  const prefName = 'collapseHallPosts';
  const theTable = pCC.lastElementChild;
  if (theTable instanceof HTMLTableElement) {
    setupPref(prefName, theTable.previousElementSibling.previousElementSibling);
    collapse({
      prefName,
      theTable,
      headInd: 3,
      articleTest: testArticle,
    });
  }
}

export default guildHall;
//# sourceMappingURL=hall-bf509bb9.js.map
