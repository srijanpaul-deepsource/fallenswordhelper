import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bp as fshBuffLog, p as pCC } from './calfSystem-7a121553.js';
import { m as makePageTemplate } from './makePageTemplate-0ff5d00c.js';
import { g as get, s as set } from './idb-a4bd5e0c.js';

function displayBuffLog(buffLog) {
  setInnerHtml(buffLog, getElementById('bufflog'));
}

function clearBuffLog() {
  set(fshBuffLog, '').then(displayBuffLog);
}

function injectBuffLog(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  setInnerHtml(makePageTemplate({
    title: 'Buff Log',
    comment: '',
    spanId: 'clearBuffs',
    button: 'Clear',
    divId: 'bufflog',
  }), content);
  onclick(getElementById('clearBuffs'), clearBuffLog);
  get(fshBuffLog).then(displayBuffLog);
}

export default injectBuffLog;
//# sourceMappingURL=injectBuffLog-5e771ca4.js.map
