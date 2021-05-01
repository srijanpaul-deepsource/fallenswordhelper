import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bk as fshBuffLog, p as pCC } from './calfSystem-6b7d7ae6.js';
import { m as makePageTemplate } from './makePageTemplate-9755476e.js';
import { g as get, s as set } from './idb-abe33202.js';

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
//# sourceMappingURL=injectBuffLog-57319cd5.js.map
