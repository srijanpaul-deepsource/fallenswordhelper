import { s as partial, bm as handleEvent } from './calfSystem-579856fa.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-9c3ad55b.js.map
