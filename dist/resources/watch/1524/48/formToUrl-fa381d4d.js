import { N as navigateTo, O as indexPhp } from './calfSystem-2bd62864.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-fa381d4d.js.map
