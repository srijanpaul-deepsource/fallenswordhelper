import { O as navigateTo, ap as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-06ff1f7b.js';
import { c as createInput } from './createInput-5ef49776.js';
import { i as insertElementAfter } from './insertElementAfter-dfc90e57.js';
import { i as insertElementBefore } from './insertElementBefore-9228b012.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-c7ff59a2.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-cfff2096.js';
import { i as interceptSubmit } from './interceptSubmit-b08c5c8c.js';
import './formToUrl-2c2f89f4.js';

function gotoPage(pageId) {
  navigateTo(`${arenaUrl}completed&page=${pageId}`);
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function injectStartButton() {
  const prevButton = querySelector('#pCC input[value="<"]');
  if (prevButton) {
    const startButton = createInput({ type: 'button', value: '<<' });
    insertElementBefore(startButton, prevButton);
    insertHtmlAfterEnd(startButton, '&nbsp;');
    onclick(startButton, partial(gotoPage, 1));
  }
}

function gotoLastPage() { gotoPage(lastPage()); }

function injectFinishButton() {
  const nextButton = querySelector('#pCC input[value=">"]');
  if (nextButton) {
    const finishButton = createInput({ type: 'button', value: '>>' });
    insertElementAfter(finishButton, nextButton);
    insertHtmlBeforeBegin(finishButton, '&nbsp;');
    onclick(finishButton, gotoLastPage);
  }
}

function completedArenas() {
  injectStartButton();
  injectFinishButton();
  interceptSubmit();
}

export default completedArenas;
//# sourceMappingURL=completedArenas-92fdcd18.js.map
