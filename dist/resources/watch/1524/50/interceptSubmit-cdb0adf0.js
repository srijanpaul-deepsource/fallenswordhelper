import { f as formToUrl } from './formToUrl-1b542ce2.js';
import { k as on, p as pCC } from './calfSystem-8168cf6d.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-cdb0adf0.js.map
