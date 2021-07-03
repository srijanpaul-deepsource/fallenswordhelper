import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bq as fshBuffLog, p as pCC } from './calfSystem-2bd62864.js';
import { m as makePageTemplate } from './makePageTemplate-d0dedcad.js';
import { g as get, s as set } from './idb-9e22c871.js';

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
//# sourceMappingURL=injectBuffLog-3fb1332f.js.map
