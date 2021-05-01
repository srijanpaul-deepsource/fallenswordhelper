import { O as navigateTo, ay as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-6b7d7ae6.js';
import { c as createInput } from './createInput-3f7c664b.js';
import { i as insertElementAfter } from './insertElementAfter-b0b0993d.js';
import { i as insertElementBefore } from './insertElementBefore-2bf2da7f.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a41e4c5d.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-8b6543a5.js';
import { i as interceptSubmit } from './interceptSubmit-b4b8e480.js';
import './formToUrl-aa363b07.js';

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
//# sourceMappingURL=completedArenas-a2756a84.js.map
