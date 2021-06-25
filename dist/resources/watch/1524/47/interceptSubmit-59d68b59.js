import { f as formToUrl } from './formToUrl-c26b8bfa.js';
import { k as on, p as pCC } from './calfSystem-7a121553.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-59d68b59.js.map
