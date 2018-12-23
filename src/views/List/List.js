import React from 'react';
import './list.css';
import { Route, matchPath } from 'react-router-dom'
import { ListOnly } from './ListOnly/ListOnly';
import { AvengerDetail } from '../../components/AvengerDetail/AvengerDetail';


/**Main component for all routes starting from '/list' */
export const List = ({ avengers, match, location, history,onAvengerDetailEdited }) => {

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
    const selectedAvenger = avengers.find(av => selectedId === av.id) || null;

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <ListOnly avengers={avengers}
                        selectedId={selectedId}
                        onAvengerClick={(id) => onAvengerClick(id, match, history)}
                    />
                </div>
                <div className=" col-xs-12 col-sm-6">
                    <Route path={`${match.path}/:id`}
                     render={(props) => <AvengerDetail avenger={selectedAvenger} onAvengerDetailEdited={onAvengerDetailEdited}/>} />
                </div>
            </div>
        </React.Fragment>
    );
}

const onAvengerClick = (id, match, history) => {
    history.push(`${match.path}/${id}`);
};