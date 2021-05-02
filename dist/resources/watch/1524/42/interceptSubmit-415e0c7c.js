import { f as formToUrl } from './formToUrl-82de8371.js';
import { k as on, p as pCC } from './calfSystem-78c09adf.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-415e0c7c.js.map
