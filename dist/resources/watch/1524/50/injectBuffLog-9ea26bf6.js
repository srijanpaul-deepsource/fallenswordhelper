import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bq as fshBuffLog, p as pCC } from './calfSystem-8168cf6d.js';
import { m as makePageTemplate } from './makePageTemplate-df315efa.js';
import { g as get, s as set } from './idb-d2486026.js';

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
//# sourceMappingURL=injectBuffLog-9ea26bf6.js.map
