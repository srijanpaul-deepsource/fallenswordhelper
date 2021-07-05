import { a as ajaxifyBank } from './ajaxifyBank-021bd482.js';
import './calfSystem-579856fa.js';

function injectBank() {
  ajaxifyBank({
    headSelector: '#pCC h2',
    headText: 'Bank',
    appLink: true,
    depoPos: 1,
    balPos: 0,
    data: {
      cmd: 'bank',
      subcmd: 'transaction',
    },
    initWithdraw: '',
  });
}

export default injectBank;
//# sourceMappingURL=injectBank-73d42fa9.js.map
