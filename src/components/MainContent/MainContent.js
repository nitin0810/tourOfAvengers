
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { List } from '../../views/List/List';
import { Add } from '../../views/Add/Add';
import { Compare } from '../../views/Compare/Compare';
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
        this.addNewAvenger = this.addNewAvenger.bind(this);
        this.handleAvengerEdit = this.handleAvengerEdit.bind(this);
    }

    addNewAvenger(newAv) {
        const n = { id: this.state.avengers.length + 1 + 10, ...newAv };
        this.setState((prevState) => ({ avengers: [...prevState.avengers, n] }));
    }

    handleAvengerEdit(editedAv) {
        const i = this.state.avengers.findIndex(a => a.id === editedAv.id);
        this.setState((prevState) => (
            {
                avengers: [...prevState.avengers.slice(0, i), editedAv, ...prevState.avengers.slice(i + 1)]
            }
        ));
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
            <React.Fragment>
                {/* Switch component renders the first Route children which matches the current url
            Hence only 1 component amongst the children of Switch can be rendered */}
                <Switch>
                    <Route path="/dashboard" render={(props) => <Dashboard avengers={this.state.avengers} {...props} />} ></Route>
                    <Route path="/list" render={(props) =>
                        <List avengers={this.state.avengers} onAvengerDetailEdited={this.handleAvengerEdit} {...props} />} >
                    </Route>
                    <Route path="/add" render={(props) => <Add onAddAvenger={this.addNewAvenger} {...props} />} ></Route>
                    <Route path="/compare" component={Compare} ></Route>
                    <Route path="/" exact render={(props) => (
                        <Redirect to="/dashboard" {...props} ></Redirect>
                    )} ></Route>
                    <Route render={() => <h1 style={{ textAlign: "center" }}>404 Error</h1>} />
                </Switch>
            </React.Fragment >
        );
    }
};


