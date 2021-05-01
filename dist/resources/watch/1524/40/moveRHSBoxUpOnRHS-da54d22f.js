import { z as getElementById, bL as pCR } from './calfSystem-81938674.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-bb0f64ac.js';
import './insertElementBefore-6e80e0ff.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-da54d22f.js.map
