import { component$ } from '@builder.io/qwik';

interface ItemListProps {
  items: string[];
}
export const ItemList = component$(({ items }: ItemListProps) => {
  console.log('ItemList');
  return (
    <div>
      <p>ItemList</p>
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
});
