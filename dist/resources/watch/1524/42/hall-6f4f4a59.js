import { c as collapse } from './collapse-fa440331.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-78c09adf.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-09e2d265.js';
import './hideElement-30ade5f0.js';
import './toggleForce-f06995aa.js';
import './isChecked-cf65e779.js';

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
//# sourceMappingURL=hall-6f4f4a59.js.map
