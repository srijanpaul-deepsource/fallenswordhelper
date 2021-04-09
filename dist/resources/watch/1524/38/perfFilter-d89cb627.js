import { y as jQueryNotPresent, S as clickThis, z as getElementById, b as createDiv, f as insertHtmlBeforeEnd, i as insertElement, p as pCC, o as onclick } from './calfSystem-a8d6dd2c.js';
import { g as getArrayByClassName } from './getArrayByClassName-4826b4c1.js';
import { g as getInventoryById } from './getInventoryById-c3e37504.js';

let inv;
let target;

function clickOnPerf(el) {
  const thisItem = el.id.replace(`${target}-item-`, '');
  if (inv[thisItem] && inv[thisItem].craft === 'Perfect') { clickThis(el); }
}

function selectPerf() {
  const items = getArrayByClassName('selectable-item',
    getElementById(`${target}-items`));
  if (items.length === 0) { return; } // ?
  items.forEach(clickOnPerf);
}

function drawFilters(data) {
  inv = data.items;
  const buttonDiv = createDiv({ className: 'fshAC' });
  insertHtmlBeforeEnd(buttonDiv,
    '<button class="fshBl">Perfect</button>');
  insertElement(pCC, buttonDiv);
  onclick(buttonDiv, selectPerf);
}

function perfFilter(loc) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  target = loc;
  getInventoryById().then(drawFilters);
}

export { perfFilter as p };
//# sourceMappingURL=perfFilter-d89cb627.js.map
