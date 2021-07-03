import { c as collapse } from './collapse-b561a56c.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-2bd62864.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-84bdb672.js';
import './hideElement-3852cc2c.js';
import './toggleForce-5151034c.js';
import './isChecked-b16dd421.js';

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
//# sourceMappingURL=hall-d3335730.js.map
