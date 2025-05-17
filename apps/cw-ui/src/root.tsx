import {
  component$,
  noSerialize,
  useContextProvider,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientContext } from '../../../libs/shared-ui/src/lib/context/context';
import { ItemList } from './components/item-list/item-list';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.scss?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);
  useVisibleTask$(() => {
    const queryClient = new QueryClient();
    useContextProvider(QueryClientContext, noSerialize(queryClient));
    console.log('root, useVisibleTask');
  });
  console.log('root, render');

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
      <ItemList />
    </QwikCityProvider>
  );
});
