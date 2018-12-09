
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { List } from '../../views/List/List';
import { Add } from '../../views/Add/Add';
import { Compare } from '../../views/Compare/Compare';
import Proptype from 'prop-types';
import { getAvengers } from '../../api';
import { EmptyAvengersList } from '../EmptyAvengersList/EmptyAvengersList';

export class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avengers: [],
            loading: false,
            errMsg: ''
        };
    }

    componentDidMount() {
        this.setState({ loading: true, errMsg: '' });
        getAvengers()
            .then(avengers => this.setState({ avengers }))
            .catch(err => this.setState({ errMsg: err.msg || JSON.stringify(err) }))
            .then(() => this.setState({ loading: false }));
    }

    render() {
        if (this.state.loading) {
            return <p>Loading ...</p>;
        }
        if (this.state.errMsg) {
            return <p>Oops !!!. {this.state.errMsg}</p>
        }
        if (!this.state.avengers.length) {
            return <EmptyAvengersList />
        }

        return (
            <div>
                {/* Switch component renders the first Route children which matches the current url
            Hence only 1 component amongst the children of Switch can be rendered */}
                <Switch>
                    <Route path="/dashboard" render={(props) => <Dashboard avengers={this.state.avengers} {...props} />} ></Route>
                    <Route path="/list" render={(props) => <List avengers={this.state.avengers} {...props} />} ></Route>
                    <Route path="/add" component={Add} ></Route>
                    <Route path="/compare" component={Compare} ></Route>
                    <Route render={() => <h1 style={{ textAlign: "center" }}>404 Error</h1>} />
                    {/* Below Route will not be rendered in any case except users manually enters a url which is not the part of app */}
                    <Route component={Compare} ></Route>
                </Switch>
            </div >
        );
    }
};


// MainContent.proptype = {
//     avengers: Proptype.func
// };