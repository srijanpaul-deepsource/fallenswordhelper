import { u as indexAjaxData, w as infoBoxFrom, x as callApp, $ as $dataAccess, E as querySelector, o as onclick, p as pCC, B as setInnerHtml, t as createDocument, k as on, s as partial } from './calfSystem-2bd62864.js';

var css = ".fshActionRow {\n  height: 23px;\n}\n\n.fshBuffFail {\n  background-color: rgb(177, 177, 177);\n}\n\n.fshBuffSuccess {\n  background-color: rgb(159, 247, 160);\n}\n\n.fshSpin {\n  height: 22px;\n  padding-right: 20px;\n  position: relative;\n  width: 22px;\n}\n\n.fshWaiting {\n  margin: 10px auto 0 auto;\n  width: 290px;\n}\n";
var modules_6a0f40fc = {};

async function buffMarketBuy(packageId) {
  const buffHtml = await indexAjaxData({ cmd: 'buffmarket', subcmd: 'buy', id: packageId });
  const message = infoBoxFrom(buffHtml);
  if (message === 'Request accepted - buffs have automatically been cast.') {
    return { s: true };
  }
  return { s: false, e: { message } };
}

function buffmarket(data) {
  return callApp({ cmd: 'buffmarket', ...data });
}

function buy(id) {
  return buffmarket({ subcmd: 'buy', id });
}

function daBuffMarketBuy(packageId) {
  return $dataAccess(buy, buffMarketBuy, packageId);
}

async function search(injector, e) {
  e.preventDefault();
  setInnerHtml('<div class="fshWaiting">Loading...</div>', injector);
  const data = Object.fromEntries(new FormData(e.target));
  const doc = createDocument(await indexAjaxData(data));
  const newBuffResults = querySelector('#buff-results', doc).parentElement.innerHTML;
  setInnerHtml(newBuffResults, injector);
}

function injectSearch(buffResults) {
  const searchForm = document.forms[0];
  on(searchForm, 'submit', partial(search, buffResults.parentNode));
}

async function interceptBuy(e) {
  e.stopPropagation();
  const packageId = e.target.getAttribute('onclick').match(/id=([0-9]+)/)?.[1];
  if (packageId) {
    const actionRow = e.target.parentNode;
    actionRow.className = 'fshActionRow';
    setInnerHtml('<div class="fshSpin"><span class="fshSpinner"></span></div>', actionRow);
    const response = await daBuffMarketBuy(packageId);
    if (response.s) {
      setInnerHtml('<span class="fshBuffSuccess">Buffs have been applied</span>', actionRow);
    } else {
      setInnerHtml(`<span class="fshBuffFail">${response.e.message}</span>`, actionRow);
    }
  }
}

function interceptClick(e) {
  if (e.target.tagName === 'INPUT' && e.target.value === 'Buy') {
    interceptBuy(e);
  }
}

function injectBuffmarket() {
  const buffResults = querySelector('#buff-results');
  if (!buffResults) { return; }
  injectSearch(buffResults);
  onclick(pCC, interceptClick, true);
}

export default injectBuffmarket;
//# sourceMappingURL=injectBuffmarket-c29b1665.js.map
