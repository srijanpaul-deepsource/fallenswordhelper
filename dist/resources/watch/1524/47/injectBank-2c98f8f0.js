import { a as ajaxifyBank } from './ajaxifyBank-440b7f71.js';
import './calfSystem-7a121553.js';

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
//# sourceMappingURL=injectBank-2c98f8f0.js.map
