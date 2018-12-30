import React from 'react';
import './list.css';
import { Route, matchPath } from 'react-router-dom'
import { ListOnly } from './ListOnly/ListOnly';
import { AvengerDetail } from '../../components/AvengerDetail/AvengerDetail';
import { Sort } from '../../components/Sort/Sort';
import { Filter } from '../../components/Filter/Filter';


/**Main component for all routes starting from '/list' */
export const List = ({ avengers, match, location, history, onAvengerDetailEdited }) => {

    // since List component is routed by path '/list', which does not include any parameter
    // we can't get the id in the url using match.params.id.
    // Hence, in order to get the id from url we need to
    // use matchPath function, which is used by react-router itself internally
    const m = matchPath(location.pathname, {
        path: `${match.path}/:id`
    });
    // match can be null, hence apply check
    const selectedId = m && m.params.id ? +m.params.id : null;

    // set selectedAvenger data
    const selectedAvenger = selectedId ? avengers.find(av => selectedId === av.id) || null : null;

    // get applied sort and filter info
    const sortFilterParams = getSearchParams(location);

    return (
        <React.Fragment>
            <Sort appliedSort={sortFilterParams.sort}
                onSortSelect={(sort) => onSortFilter({ ...sortFilterParams, sort }, match, history)} />
            <Filter appliedFilter={{ earth: sortFilterParams.earth, movie: sortFilterParams.movie }}
                onFilterSelect={(filters) => onSortFilter({ ...sortFilterParams, ...filters }, match, history)} />

            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <ListOnly avengers={getFilteredSortedList(avengers, sortFilterParams)}
                        selectedId={selectedId}
                        onAvengerClick={(id) => onAvengerClick(id, sortFilterParams,match, history)}
                    />
                </div>
                <div className=" col-xs-12 col-sm-6">
                    <Route path={`${match.path}/:id`}
                        render={(props) => <AvengerDetail avenger={selectedAvenger} onAvengerDetailEdited={onAvengerDetailEdited} />} />
                </div>
            </div>
        </React.Fragment>
    );
}

const onAvengerClick = (id, params, match, history) => {
    const searchString = getSearchParamsString(params);
    history.push(`${match.path}/${id}/?${searchString}`);
};

const onSortFilter = (params, match, history) => {
    const searchString = getSearchParamsString(params);
    history.push(`${match.path}/?${searchString}`);
};

const getSearchParams = (location) => {
    const searchParam = new URLSearchParams(location.search);
    return {
        sort: searchParam.get('sort') || '',
        earth: searchParam.get('earth') || false,
        movie: searchParam.get('movie') || false,
    };
}

const getSearchParamsString = (params) => {
    const searchParam = new URLSearchParams();
    if (params.sort) { searchParam.set('sort', params.sort); }
    if (params.earth) { searchParam.set('earth', params.earth); }
    if (params.movie) { searchParam.set('movie', params.movie); }
    return searchParam.toString();
}

const getFilteredSortedList = (list, sfParam) => {
    let fList = list;
    if (sfParam.earth) {
        fList = fList.filter(a => a.planet === 'Earth');
    }
    if (sfParam.movie) {
        fList = fList.filter(a => a.hasDedicatedMovie);
    }
    if (sfParam.sort) {
        if (sfParam.sort === 'name') {
            fList = fList.sort((a, b) => a.name <= b.name ? -1 : 1);
        } else if (sfParam.sort === 'lh') {
            fList = fList.sort((a, b) => a.rating <= b.rating ? -1 : 1);
        } else if (sfParam.sort === 'hl') {
            fList = fList.sort((a, b) => a.rating >= b.rating ? -1 : 1);
        }
    }

    return fList;
};