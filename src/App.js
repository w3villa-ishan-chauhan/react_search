import React, { useState } from 'react';

// Sample data with prices
const items = [
  { name: 'Apple', price: 1.2 },
  { name: 'Banana', price: 0.5 },
  { name: 'Cherry', price: 2.0 },
  { name: 'Date', price: 3.0 },
  { name: 'Fig', price: 1.5 },
  { name: 'Grapes', price: 2.5 },
  { name: 'Kiwi', price: 1.8 },
];

const FilterSearch = () => {
  // State to hold the search query
  const [query, setQuery] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter items based on the query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.price.toString().includes(query)
  );

  return (
    <div>
      <h1>Filter Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by name or price..."
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default FilterSearch;
