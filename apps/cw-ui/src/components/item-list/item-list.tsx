import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { trpc, useQueryClient } from '@libs/shared-ui';

export const useItems = routeLoader$(async (event) => {
  console.log({ event });
  console.log('useitems routerloader');
  const queryClient = useQueryClient(event);

  const items = await queryClient.fetchQuery({
    queryKey: ['items'],
    queryFn: () => trpc.item.itemList.query(),
  });
  return items;
});

export const ItemList = component$(() => {
  const items = useItems();

  console.log('item list render', { items });
  return (
    <div>
      <p>ItemList</p>
      <ol>
        {items.value.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
});
