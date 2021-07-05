import { c as collapse } from './collapse-6b71597d.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-8168cf6d.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-75c1bcfd.js';
import './hideElement-e21a7422.js';
import './toggleForce-a9d00c58.js';
import './isChecked-8825c1a8.js';

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
//# sourceMappingURL=hall-5cbeb7d8.js.map
