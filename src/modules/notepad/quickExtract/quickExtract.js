import QuickExtract from './QuickExtract.svelte';
import instantiate from '../../modal/instantiate';

const props = { visible: true };
let thisModal;

export default function quickExtract() {
  thisModal = instantiate(props, thisModal, QuickExtract);
}
