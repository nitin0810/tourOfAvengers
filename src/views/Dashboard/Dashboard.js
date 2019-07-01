import React from 'react';
import { Route } from 'react-router-dom';
import './Dashboard.css';
import { Search } from '../../components/Search/Search';
import { SearchedAvenger } from './SearchedAvenger/SearchedAvenger';

let searchComponentKey = 0;

export const Dashboard = ({ avengers, match, location, history }) => {
    console.log(avengers);


    const top4 = giveTopFourAvengers(avengers);
    const initialSearch = getSearchStringFromUrl(location);
    const searchResult = findSearchedAvenger(initialSearch, avengers);

    return (
        <React.Fragment>
            <h4>Top Avengers</h4>
            <div className="row">
                {top4.map(av => (
                    <div key={av.id} className="col-6 col-md-3"
                        style={{ cursor: 'pointer' }} title="Click to view Details"
                        onClick={() => onTopAvengerClick(history, av.id)}
                    >
                        <div className="card" style={{minHeight:'150px'}}>
                            <img className="card-img-top shortImg" src={av.imgUrl} alt="Avenger Img" />
                            <div className="card-body cardBody">
                                <h5 className="card-title">{av.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Search list={avengers} initialSearch={initialSearch} key={++searchComponentKey}
                onSearch={(searchString) => onAvengerSearch(searchString, history, match)} />

            <Route path={`${match.path}/search`}
                render={(props) =>
                    <SearchedAvenger {...props}
                        id={searchResult.id}
                        name={searchResult.name}
                        imgUrl={searchResult.imgUrl}
                        rating={searchResult.rating}
                    />
                }>
            </Route>

        </React.Fragment>
    );
};

// code related to top avengers
const onTopAvengerClick = (history, id) => {
    history.push(`/list/${id}`);
};

// TODO : optimize below algorithm later
const giveTopFourAvengers = (avengers) => {
    return avengers.sort((a, b) => isFirstPopularThanSecond(a, b) ? -1 : 1).slice(0, 4);
};

/**@returns true if first avenger is more/equal popular to second one, false otherwise*/
const isFirstPopularThanSecond = (av1, av2) => {

    const p1 = av1.rating + av1.powers.length + (av1.hasDedicatedMovie ? 1 : 0),
        p2 = av2.rating + av2.powers.length + (av2.hasDedicatedMovie ? 1 : 0);

    return p1 >= p2;
};

// CODE RELATED TO SEARCH AVENGER
const onAvengerSearch = (searchString, history, match) => {
    history.push(`${match.path}/search?q=${searchString}`);
};

const getSearchStringFromUrl = (location) => {
    const searchParam = new URLSearchParams(location.search);
    return searchParam.get('q') || '';
};

const findSearchedAvenger = (search, avengers) => {
    const s = search.trim();
    return avengers.find(av => s.toLowerCase() === av.name.toLowerCase()) || {};
}

