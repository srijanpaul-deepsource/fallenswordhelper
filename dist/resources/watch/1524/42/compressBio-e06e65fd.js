import { c as createInput } from './createInput-de57287a.js';
import { c as createLabel } from './createLabel-f5713a4d.js';
import { z as getElementById, k as on, s as partial, Y as sendEvent } from './calfSystem-78c09adf.js';
import { i as insertElementBefore } from './insertElementBefore-34b77984.js';

var css = ".fshCompressor {\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  position: relative;\n}\n\n.fshCompressor > label {\n  position: absolute;\n  top: 100%;\n}\n\n.fshCompressor > input {\n  display: none;\n}\n\n.fshCompressor > label:after {\n  content: \"More ...\";\n}\n\n.fshCompressor > input:checked + label:after {\n  content: \"Less ...\";\n}\n\n.fshCompressor > input ~ div {\n  height: 10em;\n  overflow: hidden;\n}\n\n.fshCompressor > input:checked ~ div {\n  height: 100%;\n}\n";
var modules_09ddb631 = {};

function injectToggle(bioCell) {
  const toggle = insertElementBefore(
    createInput({ id: 'fshCompressToggle', type: 'checkbox' }),
    bioCell,
  );
  on(toggle, 'change', partial(sendEvent, 'bio', 'toggle'));
}

function doCompression(bioCell) {
  bioCell.parentNode.classList.add('fshCompressor');
  injectToggle(bioCell);
  insertElementBefore(
    createLabel({ className: 'sendLink', htmlFor: 'fshCompressToggle' }),
    bioCell,
  );
}

function getFontSize(bioCell) {
  const computedStyle = getComputedStyle(bioCell);
  return parseInt(computedStyle.getPropertyValue('font-size'), 10);
}

function compressBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  const parent = bioCell.parentNode;
  const { style: { display } } = parent;
  parent.style.display = 'block';
  if (bioCell.clientHeight / getFontSize(bioCell) > 10) {
    doCompression(bioCell);
  }
  parent.style.display = display;
}

export default compressBio;
//# sourceMappingURL=compressBio-e06e65fd.js.map