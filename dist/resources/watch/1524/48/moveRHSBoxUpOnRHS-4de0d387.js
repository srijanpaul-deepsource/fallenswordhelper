import { z as getElementById, bS as pCR } from './calfSystem-2bd62864.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-ac52300a.js';
import './insertElementBefore-5adb1609.js';

function moveRHSBoxUpOnRHS(title) {
  const box = getElementById(title);
  if (box) {
    insertElementAfterBegin(pCR, box);
  }
}

export default moveRHSBoxUpOnRHS;
//# sourceMappingURL=moveRHSBoxUpOnRHS-4de0d387.js.map
