<script>
  import ModalBackground from './ModalBackground.svelte';
  import ModalDialog from './ModalDialog.svelte';
  import calf from '../support/calf';
  import { createEventDispatcher } from 'svelte';

  export let visible = true;

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  let oldDialogIsClosed;

  function replaceDialogIsClosed() {
    if (calf.dialogIsClosed) {
      oldDialogIsClosed = calf.dialogIsClosed;
    }
    calf.dialogIsClosed = () => !visible;
  }

  function restoreDialogIsClosed() {
    if (oldDialogIsClosed) {
      calf.dialogIsClosed = oldDialogIsClosed;
    }
  }

  $: {
    if (visible) {
      replaceDialogIsClosed();
    } else {
      restoreDialogIsClosed();
    }
  }
</script>

<ModalBackground { visible } on:click={close}>
  <ModalDialog { visible } on:close={close}>
    <slot></slot>
  </ModalDialog>
</ModalBackground>
