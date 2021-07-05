import { z as getElementById, bS as pCR } from './calfSystem-8168cf6d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-dad63ea4.js';
import './insertElementBefore-784d4581.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-a15ac454.js.map
