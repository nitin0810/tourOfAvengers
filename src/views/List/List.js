import React from 'react';
import './list.css';
import { ListItem } from './Listitem/ListItem';
import { Route, matchPath } from 'react-router-dom'
export const List = ({ avengers, match, location, history }) => {

    // In order to get the id from url in List component
    // use matchPath fucntion used by react-router itself internally
    const m = matchPath(location.pathname, {
        path: `${match.path}/:id`
    });
    // match can be null, hence apply check
    const selectedId = m && m.params.id ? +m.params.id : null;

    return (
        <div>
            <ul>
                {avengers.map(avenger =>
                    <ListItem key={avenger.id}
                        isSelected={avenger.id === selectedId}
                        onClick={() => onAvengerClick(avenger.id, match,history)}>
                        {avenger}
                    </ListItem>
                )}
            </ul>
            <Route path={`${match.path}/:id`} component={() => <p>asdfas</p>} />
        </div>
    );
}

const onAvengerClick = (id,match, history) => {
    history.push(`${match.path}/${id}`);
};