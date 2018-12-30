
import React from 'react';

export const Sort = ({ appliedSort, onSortSelect }) => {


    return (
        <div>
            <label>Sort {appliedSort && <span> *</span>}</label>
            <select value={appliedSort} onChange={(e) => onSortSelect(e.target.value)}>
                <option value="" disabled>Select Sorting</option>
                <option value="name">Name</option>
                <option value="lh">Rating (Low to High)</option>
                <option value="hl">Rating (High to Low)</option>
            </select>
        </div>
    );
}