import { s as partial } from './calfSystem-579856fa.js';

function idTest(id, target) {
  return target.id === id;
}

function selfIdIs(id) {
  return partial(idTest, id);
}

export { selfIdIs as s };
//# sourceMappingURL=selfIdIs-6f5c17ab.js.map
