import { N as arrayFrom, O as navigateTo, P as indexPhp } from './calfSystem-06ff1f7b.js';

function formToUrl(form) {
  const validInputs = arrayFrom(form.elements)
    .filter((i) => !['button', 'submit'].includes(i.type))
    .filter((i) => i.type !== 'checkbox' || i.checked)
    .map((i) => `${i.name}=${i.value}`)
    .join('&');
  navigateTo(`${indexPhp}?${validInputs}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-2c2f89f4.js.map
