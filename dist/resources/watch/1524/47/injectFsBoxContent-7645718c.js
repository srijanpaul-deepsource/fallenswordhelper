import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, p as pCC } from './calfSystem-7a121553.js';
import { m as makePageTemplate } from './makePageTemplate-0ff5d00c.js';
import { g as get, s as set } from './idb-a4bd5e0c.js';

function inject(fsboxcontent) {
  setInnerHtml(fsboxcontent, getElementById('fsboxdetail'));
}

function clearFsBox() {
  set('fsh_fsboxcontent', '');
  window.location.reload();
}

function injectFsBoxContent(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  setInnerHtml(makePageTemplate({
    title: 'FS Box Log',
    comment: '',
    spanId: 'fsboxclear',
    button: 'Clear',
    divId: 'fsboxdetail',
  }), content);
  get('fsh_fsboxcontent').then(inject);
  onclick(getElementById('fsboxclear'), clearFsBox, true);
}

export default injectFsBoxContent;
//# sourceMappingURL=injectFsBoxContent-7645718c.js.map
