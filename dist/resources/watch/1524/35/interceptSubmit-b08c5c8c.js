import { f as formToUrl } from './formToUrl-2c2f89f4.js';
import { k as on, p as pCC } from './calfSystem-06ff1f7b.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-b08c5c8c.js.map
