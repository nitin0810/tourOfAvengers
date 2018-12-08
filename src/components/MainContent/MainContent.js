
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { List } from '../../views/List/List';
import { Add } from '../../views/Add/Add';
import { Compare } from '../../views/Compare/Compare';
import Proptype from 'prop-types';

export const MainContent = ({ avengers }) => {
    return (
        <div>
            {/* Switch component renders the first Route children which matches the current url
            Hence only 1 component amongst the children of Switch can be rendered */}
            <Switch>
                <Route path="/dashboard" component={Dashboard} ></Route>
                <Route path="/list" component={List} ></Route>
                <Route path="/add" component={Add} ></Route>
                <Route path="/compare" component={Compare} ></Route>
                <Route render={ () => <h1 style={{textAlign:"center"}}>404 Error</h1> } />
                {/* Below Route will not be rendered in any case except users manually enters a url which is not the part of app */}
                <Route component={Compare} ></Route>
            </Switch>
        </div>
    );
};


MainContent.proptype = {
    avengers: Proptype.func
};