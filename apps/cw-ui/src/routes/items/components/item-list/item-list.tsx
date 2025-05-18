import { component$ } from '@builder.io/qwik';

interface ItemListProps {
  items: string[];
}
export const ItemList = component$(({ items }: ItemListProps) => {
  console.log('ItemList');
  return (
    <div>
      <p class="bg-blue-500">ItemList</p>
      <ol>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
});
