import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './shared-ui.scss?inline';

export const SharedUi = component$(() => {
  useStylesScoped$(styles);

  return <>SharedUi works!</>;
});
