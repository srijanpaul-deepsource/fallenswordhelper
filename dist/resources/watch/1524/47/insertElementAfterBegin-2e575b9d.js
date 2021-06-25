import { i as insertElement } from './calfSystem-7a121553.js';
import { i as insertElementBefore } from './insertElementBefore-165ce171.js';

function noChildren(parentNode, newNode) {
  if (parentNode.firstChild instanceof Node) { // Text Node
    return insertElementBefore(newNode, parentNode.firstChild); // Text Node
  }
  return insertElement(parentNode, newNode);
}

function insertElementAfterBegin(parentNode, newNode) {
  if (parentNode instanceof Element) {
    return noChildren(parentNode, newNode);
  }
}

export { insertElementAfterBegin as i };
//# sourceMappingURL=insertElementAfterBegin-2e575b9d.js.map
