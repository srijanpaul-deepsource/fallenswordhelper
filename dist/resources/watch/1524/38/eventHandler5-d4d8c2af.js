import { s as partial, b9 as handleEvent } from './calfSystem-a8d6dd2c.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-d4d8c2af.js.map
