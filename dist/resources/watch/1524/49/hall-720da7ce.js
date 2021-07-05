import { c as collapse } from './collapse-7e6371bd.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-579856fa.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-6d4f0b76.js';
import './hideElement-3021ab25.js';
import './toggleForce-d61da182.js';
import './isChecked-ecfa0022.js';

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
//# sourceMappingURL=hall-720da7ce.js.map
