import React, { useMemo } from 'react';

const ListComponent = ({ items }) => {
//   const processedItems = processItems(items); // Expensive computation
const processedItems = useMemo(() => processItems(items), [items]);

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const processItems = (items) => {
  // Expensive computation
  // Imagine some heavy processing here
  console.log(items)
  return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
};

export default ListComponent;
