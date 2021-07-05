import { f as formToUrl } from './formToUrl-72736914.js';
import { k as on, p as pCC } from './calfSystem-579856fa.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-9bdd8d86.js.map
