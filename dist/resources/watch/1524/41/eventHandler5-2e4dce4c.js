import { s as partial, bg as handleEvent } from './calfSystem-6b7d7ae6.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-2e4dce4c.js.map
