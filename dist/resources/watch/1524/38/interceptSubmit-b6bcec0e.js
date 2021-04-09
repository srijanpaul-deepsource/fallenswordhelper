import { f as formToUrl } from './formToUrl-438642ae.js';
import { k as on, p as pCC } from './calfSystem-a8d6dd2c.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-b6bcec0e.js.map
