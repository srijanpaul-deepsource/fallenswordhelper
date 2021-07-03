import { N as navigateTo, aD as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-2bd62864.js';
import { c as createInput } from './createInput-43c1de94.js';
import { i as insertElementAfter } from './insertElementAfter-77ee73ac.js';
import { i as insertElementBefore } from './insertElementBefore-5adb1609.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0f76853c.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-8df90d9d.js';
import { i as interceptSubmit } from './interceptSubmit-f4d0267f.js';
import './formToUrl-fa381d4d.js';

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
//# sourceMappingURL=completedArenas-0f80f5f6.js.map
