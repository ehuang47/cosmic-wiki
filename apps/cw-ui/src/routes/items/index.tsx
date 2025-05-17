import { $, component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { trpc, useQueryClient } from '@libs/shared-ui';
import { ItemList } from './components/item-list/item-list';

export const useItems = routeLoader$(async (event) => {
  console.log('useitems routerloader');
  const queryClient = useQueryClient(event);

  const items = await queryClient.fetchQuery({
    queryKey: ['items'],
    queryFn: () => trpc.item.itemList.query(),
  });
  return items;
});

export default component$(() => {
  const items = useItems();
  console.log('items page');
  const handleClick = $(async () => {
    const queryClient = useQueryClient();
    const items = await queryClient.fetchQuery({
      queryKey: ['items'],
      queryFn: () => trpc.item.itemList.query(),
    });
    console.log(items);
  });

  return (
    <div>
      <ItemList items={items.value} />
      <button onClick$={handleClick}>Request data</button>
    </div>
  );
});
