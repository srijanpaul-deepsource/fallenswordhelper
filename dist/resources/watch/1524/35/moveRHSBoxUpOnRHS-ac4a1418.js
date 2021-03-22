import { z as getElementById, bM as pCR } from './calfSystem-06ff1f7b.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-c7ac0213.js';
import './insertElementBefore-9228b012.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-ac4a1418.js.map
