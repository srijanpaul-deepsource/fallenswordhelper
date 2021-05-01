import { O as navigateTo, ax as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-81938674.js';
import { c as createInput } from './createInput-cd7b94b1.js';
import { i as insertElementAfter } from './insertElementAfter-02e15078.js';
import { i as insertElementBefore } from './insertElementBefore-6e80e0ff.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a29e456d.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-2c8ea636.js';
import { i as interceptSubmit } from './interceptSubmit-1acde52b.js';
import './formToUrl-822020a1.js';

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
//# sourceMappingURL=completedArenas-95925849.js.map
