import React from 'react';
import { Power } from '../../components/Powers/Powers';
import PropTypes from 'prop-types'
import './Add.css';

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
            hasDedicatedMovie: false,
            invalidMsg: ''
        };
        this.fileRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleImgUpload = this.handleImgUpload.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.onAddPowerHandler = this.onAddPowerHandler.bind(this);

    }

    handleChange(e) {
        const control = e.target.name;

        if (control === 'name' || control === 'description' || control === 'planet' ||
            control === 'rating' || control === 'gender') {
            this.setState({ [control]: control === 'rating' ? +e.target.value : e.target.value });
        } else if (control === 'hasDedicatedMovie') {
            this.setState({ hasDedicatedMovie: e.target.checked });
        }
    }

    handleImgUpload(e) {
        if (!e.target.files.length) { return; }
        const file = e.target.files[0];
        if (this.state.imgUrl) {
            window.URL.revokeObjectURL(this.state.imgUrl);
        }
        this.setState({ imgUrl: window.URL.createObjectURL(file) });
    }

    onAddPowerHandler(newPower) {

        this.setState((prevState) => ({
            powers: [...prevState.powers, newPower]
        }));
    }

    submitHandler(e) {
        e.preventDefault();
        const err = this.giveInvalidMsg();
        if (err) {
            this.setState({ invalidMsg: err });
        } else {
            // reset state
            this.setState({
                name: '',
                description: '',
                planet: '',
                gender: '',
                powers: [],
                imgUrl: '',
                rating: 0,
                hasDedicatedMovie: false,
                invalidMsg: ''
            });
            // since invalidMsg property is not needed in newAvengerInfo
            // hence make a new copy and delete it from that
            // in below line, this.state still contains the old info as this.setState()
            // is asynchronous and will be called after the current stack gets empty
            const newAvengerData = Object.assign({}, this.state);
            delete newAvengerData.invalidMsg;
            // add new avenger to avengers list present in parent component
            this.props.onAddAvenger(newAvengerData);
            alert('Avenger added successfully');
        }
    }

    giveInvalidMsg() {
        for (const x in this.state) {
            if (x !== 'invalidMsg' && x !== 'powers' && x !== 'hasDedicatedMovie' && x !== 'imgUrl') {
                if (!this.state[x]) {
                    return `${x.toUpperCase()} is required`;
                }
            } else if (x === 'powers' && !this.state[x].length) {
                return 'Please provide atleast one power';
            }
        }
        return '';
    }


    render() {
        
        return (
            <form onSubmit={this.submitHandler} className="add" >

                <label htmlFor="name" className="form-field">Name : </label>
                <input type="text" value={this.state.name}
                    placeholder='Enter Name'
                    name='name' id="name" className="form-field"
                    onChange={this.handleChange}
                />

                <label htmlFor="description" className="form-field">Description : </label>
                <textarea type="textarea" value={this.state.description}
                    placeholder='Enter Description'
                    name='description' id="description"
                    onChange={this.handleChange} className="form-field"
                ></textarea>

                <label htmlFor="planet" className="form-field">Planet : </label>
                <input type="text" value={this.state.planet}
                    placeholder='Enter Planet'
                    name='planet' id="planet"
                    onChange={this.handleChange} className="form-field"
                />

                <label className="form-field">Gender : </label>
                <div className="form-field gender">
                    <div >
                        <input type="radio" id="m" checked={this.state.gender === 'M'}
                            value='M'
                            name='gender'
                            onChange={this.handleChange}
                        /><label htmlFor="m">Male</label>
                    </div>
                    <div >
                        <input type="radio" id="f" checked={this.state.gender === 'F'}
                            value='F'
                            name='gender'
                            onChange={this.handleChange}
                        /><label htmlFor="f">Female</label>
                    </div>
                </div>
                <label htmlFor="hasMovie" className="form-field movie-label">Has Dedicated Movie ?  </label>
                <div className="form-field">
                    <input type="checkbox" id="hasMovie" checked={this.state.hasDedicatedMovie}
                        name='hasDedicatedMovie'
                        onChange={this.handleChange}
                    />
                </div>

                <label htmlFor="rating" className="form-field">Rating : </label>
                <select value={this.state.rating}
                    name='rating' id="rating"
                    onChange={this.handleChange} className="form-field"
                >
                    <option value='0' disabled>Select Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>

                <input type="file" accept="image/*" style={{ display: 'none' }} ref={this.fileRef} onChange={this.handleImgUpload}></input>
                <div className="form-field">

                    <button type="button" className=" btn btn-primary"
                        onClick={() => this.fileRef.current.click()}>
                        {this.state.imgUrl ? 'Change Image' : 'Upload Image'}</button>
                </div>
                <div className="form-field">
                    <img src={this.state.imgUrl || 'imgs/defaultPic.jpg'} alt="Avenger Img"
                    />
                </div>

                <label className="form-field">Powers :  </label>
                <div className="form-field">
                    <Power powers={this.state.powers}
                        allowAdd={true}
                        onAddPower={this.onAddPowerHandler}
                    />
                </div>

                {this.state.invalidMsg ?
                    <div className="alert alert-danger" style={{ width: '70%', textAlign: 'center' }}>
                        {this.state.invalidMsg}
                    </div>
                    : null
                }

                <div style={{ width: '70%', textAlign: 'center' }}>
                    <button style={{ width: '50%' }} type="submit" className='btn btn-success'>Submit</button>
                </div>
            </form>
        );
    }
}

Add.proptypes = {
    onAddAvenger: PropTypes.func.isRequired
};