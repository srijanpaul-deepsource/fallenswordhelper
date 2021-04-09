import { z as getElementById, bM as pCR } from './calfSystem-a8d6dd2c.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2432ce79.js';
import './insertElementBefore-71272774.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-86d18278.js.map
