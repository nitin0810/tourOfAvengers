
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
        this.fetchData();
    }

    fetchData() {
        this.setState({ loading: true, errMsg: '' });
        getAvengers()
            .then(avengers => this.setState({ avengers, loading: false }))
            .catch(err => this.setState({ errMsg: err.msg || JSON.stringify(err), loading: false }));
    }

    render() {

        if (this.state.loading) {
            return <h5>Loading ...<i className="fa fa-spin fa-spinner"></i></h5>;
        }
        if (this.state.errMsg) {
            return (
                <div style={{ color: 'red', textAlign: 'center' }}>
                    <h6 >Oops ..! {this.state.errMsg}</h6>
                    <button className="btn btn-clear btn-danger btn-sm" onClick={this.fetchData.bind(this)}>Try Again</button>
                </div>
            )
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
                    <Route path="/compare" render={(props) => <Compare avengers={this.state.avengers} />} ></Route>
                    <Route path="/" exact render={(props) => (
                        <Redirect to="/dashboard" {...props} ></Redirect>
                    )} ></Route>
                    <Route render={() => <h1 style={{ textAlign: "center" }}>404 Error</h1>} />
                </Switch>
            </React.Fragment >
        );
    }
};


