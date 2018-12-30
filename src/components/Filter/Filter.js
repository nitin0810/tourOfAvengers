
import React from 'react';

export const Filter = ({ appliedFilter, onFilterSelect }) => {

// applied filters' values are recieved form search params which are always in string
// hence dp little extra work inside checked attribute
    return (
        <div>
            <h6>Filter {isFilterApplied(appliedFilter) && <span> *</span>}</h6>
            <input id="earth" type="checkbox" checked={appliedFilter.earth==='true'}
                onChange={(e) => onFilterSelect({ earth: e.target.checked, movie: appliedFilter.movie })}
            /> <label htmlFor="earth">From Earth</label>
            <br/>
            <input id="movie" type="checkbox" checked={appliedFilter.movie==='true'}
                onChange={(e) => onFilterSelect({ earth:appliedFilter.earth, movie: e.target.checked})}
            /> <label htmlFor="movie">Has Dedicated Movie</label>
        </div>
    );
}

const isFilterApplied = (appliedFilter)=>{
    return appliedFilter.movie || appliedFilter.earth; 
}