import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { trpc } from '@libs/shared-ui';

export const useItems = routeLoader$(async (req) => {
  console.log({ req });
  console.log('useitems routerloader');
  const items = await trpc.item.itemList.query();
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
