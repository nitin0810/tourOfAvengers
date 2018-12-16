import React from 'react';
import PropTypes from 'prop-types';

export class Power extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPower: ''
        };

        this.powerListRef = React.createRef();

        this.handleAddPower = this.handleAddPower.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.scrollPowerList();
    }

    componentDidUpdate(prevProps) {
        // scroll only when a new power is added to list
        // below condition is neccessary, otherwise list will be scrolled on each key stroke 
        // of newPower input
        if (this.props.powers.length !== prevProps.powers.length) {
            this.scrollPowerList();
        }
    }


    handleChange(e) {
        this.setState({ newPower: e.target.value });
    }

    handleAddPower() {
        if(this.state.newPower.trim()===''){return;}
        this.setState({ newPower: '' });
        this.props.onAddPower(this.state.newPower);
    }

    scrollPowerList() {
        const ulElement = this.powerListRef.current;
        ulElement.scrollTop = ulElement.scrollHeight;
    }


    render() {
        const existingPowers = this.props.powers;
        return (
            <div>{this.props.allowAdd ?
                <div>
                    <input type="text" value={this.state.newPower}
                        placeholder='Add Power'
                        onChange={this.handleChange} />
                    <button type='button' onClick={this.handleAddPower}>Add</button>
                </div>
                : null
            }

                <ul ref={this.powerListRef} style={{
                    overflow: 'auto',
                    display: 'block',
                    maxHeight: '130px'
                }}>
                    {existingPowers.map((power, index) => (
                        <li key={index}>{power}</li>
                    ))}
                </ul>
            </div>
        );
    }


}

Power.propTypes = {
    powers: PropTypes.array.isRequired,
    onAddPower: PropTypes.func // required only when allowAdd is true
};

Power.defaultProps = {
    allowAdd: false
};