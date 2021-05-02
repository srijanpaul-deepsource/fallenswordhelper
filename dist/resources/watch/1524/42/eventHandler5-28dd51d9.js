import { s as partial, bg as handleEvent } from './calfSystem-78c09adf.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-28dd51d9.js.map
