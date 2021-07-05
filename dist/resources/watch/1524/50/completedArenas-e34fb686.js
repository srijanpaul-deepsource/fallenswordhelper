import { N as navigateTo, aD as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-8168cf6d.js';
import { c as createInput } from './createInput-8465eb51.js';
import { i as insertElementAfter } from './insertElementAfter-034ae2bb.js';
import { i as insertElementBefore } from './insertElementBefore-784d4581.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-4f6ecf31.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-15345f4d.js';
import { i as interceptSubmit } from './interceptSubmit-cdb0adf0.js';
import './formToUrl-1b542ce2.js';

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
//# sourceMappingURL=completedArenas-e34fb686.js.map
