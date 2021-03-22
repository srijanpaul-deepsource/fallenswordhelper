import { a as ajaxifyBank } from './ajaxifyBank-78c44fc3.js';
import './calfSystem-06ff1f7b.js';

function injectGuildBank() {
  ajaxifyBank({
    headSelector: '#pCC b',
    headText: 'Guild Bank',
    appLink: false,
    depoPos: 3,
    balPos: 2,
    data: {
      cmd: 'guild',
      subcmd: 'bank',
      subcmd2: 'transaction',
    },
    initWithdraw: '1',
  });
}

export default injectGuildBank;
//# sourceMappingURL=injectGuildBank-eb8350e3.js.map
