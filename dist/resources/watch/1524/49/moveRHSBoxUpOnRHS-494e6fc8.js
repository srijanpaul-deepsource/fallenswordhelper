import { z as getElementById, bS as pCR } from './calfSystem-579856fa.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-e92883a7.js';
import './insertElementBefore-c7161beb.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-494e6fc8.js.map
