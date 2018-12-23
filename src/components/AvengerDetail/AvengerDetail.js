import React from 'react';
import PropTypes from 'prop-types';
import { Power } from '../Powers/Powers';

export class AvengerDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.avenger.id, // used only for updating state when selected avenger changes, not being used in html
            hasDedicatedMovie: props.avenger.hasDedicatedMovie,
            rating: props.avenger.rating,
            powers: props.avenger.powers,
        };

        // for checking on save changes btn that any change has been made or not
        this.initialState = this.state;

        this.saveBtnHandler = this.saveBtnHandler.bind(this);
        this.isInfoChanged = this.isInfoChanged.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.avenger.id !== state.id) {
            // in case selected avenger has been changed
            // reset the state with new info
            return {
                id: props.avenger.id, // used only for updating state when selected avenger changes, not being used in html
                hasDedicatedMovie: props.avenger.hasDedicatedMovie,
                rating: props.avenger.rating,
                powers: props.avenger.powers,
            };
        }
        return null;
    }

    saveBtnHandler() {
        if (this.isInfoChanged()) {
            this.props.onAvengerDetailEdited(
                Object.assign( this.props.avenger,{
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
        return this.state.hasDedicatedMovie !== this.initialState.hasDedicatedMovie ||
            this.state.rating !== this.initialState.rating ||
            this.state.powers.length !== this.initialState.powers.length;
    }

    render() {
        const av = this.props.avenger;
        return (
            <div className="card" style={{}}>
                <img className="card-img-top" style={{ height: '200px' }} src={av.imgUrl} alt="Avenger" />
                <div className="card-body">
                    <h5 className="card-title">{av.name}</h5>
                    <p className="card-text">{av.description}</p>
                    <p className="card-text"><b>Planet : </b>{av.planet}</p>
                    <p className="card-text"><b>Gender : </b>{av.gender === 'M' ? 'Male' : 'Female'}</p>
                    <p className="card-text"><b>Has Dedicated Movie : </b>
                        <input type="checkbox" checked={this.state.hasDedicatedMovie}
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
                    <button type="button" onClick={this.saveBtnHandler}>Save Changes</button>


                </div>
            </div>

        );
    }


}

AvengerDetail.propTypes = {
    avenger: PropTypes.object.isRequired,
};
