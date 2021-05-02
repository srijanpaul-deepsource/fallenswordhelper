import { z as getElementById, bM as pCR } from './calfSystem-78c09adf.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-28c8cd41.js';
import './insertElementBefore-34b77984.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-f5bd9e92.js.map
