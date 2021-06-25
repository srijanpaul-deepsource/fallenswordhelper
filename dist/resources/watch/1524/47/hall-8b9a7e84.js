import { c as collapse } from './collapse-a6d29083.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-7a121553.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-4ea82834.js';
import './hideElement-7486432a.js';
import './toggleForce-41b0f4ee.js';
import './isChecked-5c7617f4.js';

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
//# sourceMappingURL=hall-8b9a7e84.js.map
