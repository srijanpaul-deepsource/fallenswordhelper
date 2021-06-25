import { z as getElementById, bR as pCR } from './calfSystem-7a121553.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2e575b9d.js';
import './insertElementBefore-165ce171.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-3ee3684e.js.map
