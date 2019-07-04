import React from 'react';
import PropTypes from 'prop-types';

export class AddPower extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPower: ''
        };

        this.inputRef = React.createRef();

        this.handleAddPower = this.handleAddPower.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { this.setState({ newPower: e.target.value }); }

    handleAddPower(e) {
        if (this.state.newPower.trim() !== '') {
            this.props.onAddPower(this.state.newPower);
            this.setState({newPower:''});
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <input  style={{width:'80%'}} type="text" value={this.state.newPower}
                    placeholder='Add Power' ref={this.inputRef}
                    onChange={this.handleChange} />
                <button  className="btn btn-primary" type='button' onClick={this.handleAddPower}>Add</button>
            </div>
        );
    }
}

AddPower.proptypes = {
    onAddPower: PropTypes.func.isRequired
};