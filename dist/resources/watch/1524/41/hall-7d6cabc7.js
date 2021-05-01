import { c as collapse } from './collapse-9c861613.js';
import { b as createDiv, i as insertElement, p as pCC } from './calfSystem-6b7d7ae6.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-fc2be28c.js';
import './hideElement-9426b096.js';
import './toggleForce-a6b1c4fe.js';
import './isChecked-0eb4a700.js';

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
//# sourceMappingURL=hall-7d6cabc7.js.map
