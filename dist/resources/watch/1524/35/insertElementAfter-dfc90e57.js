import { i as insertElement } from './calfSystem-06ff1f7b.js';
import { i as insertElementBefore } from './insertElementBefore-9228b012.js';

function refIsLast(newNode, referenceNode) {
  if (referenceNode.nextSibling instanceof Node) { // Text Node
    return insertElementBefore(newNode, referenceNode.nextSibling); // Text Node
  }
  return insertElement(referenceNode.parentNode, newNode);
}

function insertElementAfter(newNode, referenceNode) {
  if (referenceNode instanceof Node
      && referenceNode.parentNode instanceof Node) {
    return refIsLast(newNode, referenceNode);
  }
}

export { insertElementAfter as i };
//# sourceMappingURL=insertElementAfter-dfc90e57.js.map
