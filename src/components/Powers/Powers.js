import React from 'react';
import PropTypes from 'prop-types';
import { AddPower } from './AddPower/AddPower';

export class Power extends React.Component {

    constructor(props) {
        super(props);
        this.powerListRef = React.createRef();
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


    scrollPowerList() {
        const ulElement = this.powerListRef.current;
        ulElement.scrollTop = ulElement.scrollHeight;
    }


    render() {
        const existingPowers = this.props.powers;
        return (
            <div>{this.props.allowAdd ?
                <AddPower onAddPower={(addedPower)=>this.props.onAddPower(addedPower)}/>
                : null
            }

                <ul ref={this.powerListRef} >
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