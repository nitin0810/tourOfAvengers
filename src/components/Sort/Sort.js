
import React from 'react';

export const Sort = ({ appliedSort, onSortSelect }) => {

    return (
        <React.Fragment>
            <h5>Sort {appliedSort &&  <i className="fa fa-check" aria-hidden="true"></i>}</h5>
            <select value={appliedSort} onChange={(e) => onSortSelect(e.target.value)} >
                <option value="" disabled>Select Sorting</option>
                <option value="name">Name</option>
                <option value="lh">Rating (Low to High)</option>
                <option value="hl">Rating (High to Low)</option>
            </select>
        </React.Fragment>
    );
}