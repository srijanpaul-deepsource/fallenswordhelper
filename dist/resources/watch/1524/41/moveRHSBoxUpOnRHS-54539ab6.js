import { z as getElementById, bM as pCR } from './calfSystem-6b7d7ae6.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2e64279e.js';
import './insertElementBefore-2bf2da7f.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-54539ab6.js.map
