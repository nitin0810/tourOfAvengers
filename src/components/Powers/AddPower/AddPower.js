import React from 'react';
import PropTypes from 'prop-types';

export class AddPower extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPower: ''
        };

        this.handleAddPower = this.handleAddPower.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { this.setState({ newPower: e.target.value }); }

    handleAddPower(e) {
        if (this.state.newPower.trim() !== '') {
            this.props.onAddPower(this.state.newPower);
            this.setState({newPower:''});
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.newPower}
                    placeholder='Add Power'
                    onChange={this.handleChange} />
                <button type='button' onClick={this.handleAddPower}>Add</button>
            </div>
        );
    }
}

AddPower.proptypes = {
    onAddPower: PropTypes.func.isRequired
};