import { c as collapse } from './collapse-817bfece.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-a8d6dd2c.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-7e9e33b8.js';
import './hideElement-9b8f5190.js';
import './toggleForce-6fbd75e0.js';
import './isChecked-16fc7684.js';

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
//# sourceMappingURL=hall-0aa1745b.js.map
