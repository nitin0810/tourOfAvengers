

import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [], // need not be updated on props change as list in props does not change
            input: ''
        };

        this.inputHandler = this.inputHandler.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.currentSearch !== state.input) {
            return {
                input: props.currentSearch
            };
        } else {
            return null;
        }
    }

    inputHandler(e){
        const value=e.target.value;
        this.setState({
            input:value,
            list:this.props.list.filter(x=>x.name.toLowerCase().includes(value.toLowerCase()))
        });

    }

    render() {
        return (
            <div style={{ textAlign: "center", padding: '5px' }}>
                <form>
                    <input type="text" value={this.state.input}
                        onKeyUp={this.inputHandler}
                    ></input>
                    <ul>
                        {this.state.list.map(a => (
                            <li key={a.id}>{a.name}<b>d</b></li>
                        ))}
                    </ul>
                </form>
            </div>
        );
    }
};

Search.propTypes={
    currentSearch:PropTypes.string,
    list:PropTypes.array.isRequired
};
