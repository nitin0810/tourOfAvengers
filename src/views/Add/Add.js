import React from 'react';
import { Power } from '../../components/Powers/Powers';


export class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            planet: '',
            gender: '',
            powers: [],
            imgUrl: '',
            rating: 0,
            hasDedicatedMovie: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.onAddPowerHandler = this.onAddPowerHandler.bind(this);

    }

    handleChange(e) {
        const control = e.target.name;

        if (control === 'name' || control === 'description' || control === 'planet' ||
            control === 'rating' || control === 'gender') {
            this.setState({ [control]: e.target.value });
        } else if (control === 'hasDedicatedMovie') {
            this.setState({ hasDedicatedMovie: e.target.checked });
        }
    }

    onAddPowerHandler(newPower) {

        this.setState((prevState) => ({
            powers: [...prevState.powers, newPower]
        }));
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <div>
                    <label>Name : </label>
                    <input type="text" value={this.state.name}
                        placeholder='Enter Name'
                        name='name'
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label>Description : </label>
                    <input type="textbox" value={this.state.description}
                        placeholder='Enter Description'
                        name='description'
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label>Planet : </label>
                    <input type="text" value={this.state.planet}
                        placeholder='Enter Planet'
                        name='planet'
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label>Gender : </label>
                    <input type="radio" checked={this.state.gender === 'Male'}
                        value='Male'
                        name='gender'
                        onChange={this.handleChange}
                    />Male
                    <input type="radio" checked={this.state.gender === 'Female'}
                        value='Female'
                        name='gender'
                        onChange={this.handleChange}
                    />Female
                </div>

                <div>
                    <label>Has Dedicated Movie ? : </label>
                    <input type="checkbox" checked={this.state.hasDedicatedMovie}
                        name='hasDedicatedMovie'
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label>Rating : </label>
                    <select value={this.state.rating}
                        name='rating'
                        onChange={this.handleChange}
                    >
                        <option value='0' disabled>Select Rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div>
                    <label>Powers :  </label>
                    <Power powers={this.state.powers}
                        allowAdd={true}
                        onAddPower={this.onAddPowerHandler}></Power>
                </div>

                <div>
                  <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}