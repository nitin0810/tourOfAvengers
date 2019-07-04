import React from 'react';
import PropTypes from 'prop-types';
import { Power } from '../Powers/Powers';
import './AvengerDetail.css';

export class AvengerDetail extends React.Component {
    constructor(props) {
        super(props);

        //set empty initial state here as intial state will be set by getDerivedStateFromProps
        this.state = {};
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
        this.isInfoChanged = this.isInfoChanged.bind(this);
    }

    /**Called every time before render method including the first render */
    static getDerivedStateFromProps(props, state) {
        if (props.avenger && (props.avenger.id !== state.id)) {
            // in case selected avenger has been changed
            // reset the state with new info
            const newState = {
                id: props.avenger.id, // used only for updating state when selected avenger changes, not being used in html
                hasDedicatedMovie: props.avenger.hasDedicatedMovie,
                rating: props.avenger.rating,
                powers: props.avenger.powers,
                // stateCopy stores the intial state of each avenger, so that we can check onsave btn 
                // that any changes have been done or not
                stateCopy: {
                    id: props.avenger.id,
                    hasDedicatedMovie: props.avenger.hasDedicatedMovie,
                    rating: props.avenger.rating,
                    powers: props.avenger.powers,
                }
            };

            return newState;
        }
        return null;
    }

    saveBtnHandler() {
        if (this.isInfoChanged()) {
            this.props.onAvengerDetailEdited(
                Object.assign(this.props.avenger, {
                    hasDedicatedMovie: this.state.hasDedicatedMovie,
                    rating: this.state.rating,
                    powers: this.state.powers
                }));
            alert('Info Changed Successfully');
        } else {
            alert('No Changes to save');
        }
    }

    isInfoChanged() {
        return this.state.hasDedicatedMovie !== this.state.stateCopy.hasDedicatedMovie ||
            this.state.rating !== this.state.stateCopy.rating ||
            this.state.powers.length !== this.state.stateCopy.powers.length;
    }

    render() {
        const av = this.props.avenger;
        return (
            !av ?
                <div>Avenger with given ID doesn't exists yet. But you can add one.</div> :
                <div className="card avenger-detail">
                    <img className="card-img-top" style={{ height: '200px' }} src={av.imgUrl} alt="Avenger" />
                    <div className="card-body">
                        <h5 className="card-title">{av.name}</h5>
                        <p className="card-text">{av.description}</p>
                        <p className="card-text"><b>Planet : </b>{av.planet}</p>
                        <p className="card-text"><b>Gender : </b>{av.gender === 'M' ? 'Male' : 'Female'}</p>
                        <p className="card-text"><label htmlFor="movie"><b>Has Dedicated Movie : </b></label>
                            <input type="checkbox" checked={this.state.hasDedicatedMovie} id="movie"
                                name='hasDedicatedMovie'
                                onChange={(e) => this.setState({ hasDedicatedMovie: e.target.checked })}
                            />
                        </p>
                        <p className="card-text"><b>Rating : </b>
                            <select value={this.state.rating}
                                name='rating'
                                onChange={(e) => { this.setState({ rating: +e.target.value }) }}>
                                <option value='0' disabled>Select Rating</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </p>
                        <p className="card-text"><b>Powers : </b></p>

                        <Power powers={this.state.powers}
                            allowAdd={true}
                            onAddPower={(newP) => { this.setState((prevstate) => ({ powers: [...prevstate.powers, newP] })) }}
                        />
                        <button type="button" className="btn btn-sm btn-primary" onClick={this.saveBtnHandler}>Save Changes</button>


                    </div>
                </div>
    
        );
}
}


AvengerDetail.propTypes = {
    avenger: PropTypes.object,
};
