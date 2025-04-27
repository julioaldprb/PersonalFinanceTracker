import React from 'react';

// Updated categories, feel free to extend or fetch dynamically
const categories = ['Food', 'Transport', 'Entertainment', 'Salary', 'Health', 'Utilities', 'Other'];

export default function CategorySelect({ value, onChange }) {
  return (
    <div className="category-select">
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={value}
        onChange={e => onChange(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Select category --
        </option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}