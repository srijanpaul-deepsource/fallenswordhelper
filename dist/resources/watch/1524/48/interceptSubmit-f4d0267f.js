import { f as formToUrl } from './formToUrl-fa381d4d.js';
import { k as on, p as pCC } from './calfSystem-2bd62864.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-f4d0267f.js.map
