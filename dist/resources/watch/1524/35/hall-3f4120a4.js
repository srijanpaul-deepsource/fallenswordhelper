import { c as collapse } from './collapse-05556690.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-06ff1f7b.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-5475e474.js';
import './hideElement-2c661b2e.js';
import './toggleForce-e38cb2b0.js';
import './isChecked-36c474a7.js';

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
//# sourceMappingURL=hall-3f4120a4.js.map
