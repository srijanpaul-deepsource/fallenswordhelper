import { f as formToUrl } from './formToUrl-822020a1.js';
import { k as on, p as pCC } from './calfSystem-81938674.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-1acde52b.js.map
