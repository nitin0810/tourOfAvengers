
import React from 'react';

export const Filter = ({ appliedFilter, onFilterSelect }) => {

    // applied filters' values are recieved form search params which are always in string
    // hence dp little extra work inside checked attribute
    return (
        <React.Fragment>

            <h5>Filter {isFilterApplied(appliedFilter) && <i className="fa fa-check" aria-hidden="true"></i>}</h5>
            <label htmlFor="earth">
                <input id="earth" type="checkbox" checked={appliedFilter.earth === 'true'}
                    onChange={(e) => onFilterSelect({ earth: e.target.checked, movie: appliedFilter.movie })}
                /> From Earth
            </label>
            <label htmlFor="movie">
                <input id="movie" type="checkbox" checked={appliedFilter.movie === 'true'}
                    onChange={(e) => onFilterSelect({ earth: appliedFilter.earth, movie: e.target.checked })}
                /> Has Dedicated Movie
            </label>
        </React.Fragment>

    );
}

const isFilterApplied = (appliedFilter) => {
    return appliedFilter.movie || appliedFilter.earth;
}