import React from 'react';
import ComparedAvenger from './ComparedAvenger';


export class Compare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            // showComapredAvengers: false
        };

    // this.selectChangeHandler =this.selectChangeHandler.bind(this);
    }



    // returns the id of winner avenger, return null if there is a draw
    getWinner(first, second) {
        const score1 = first.rating + first.powers.length + (first.hasDedicatedMovie ? 1 : 0),
            score2 = second.rating + second.powers.length + (second.hasDedicatedMovie ? 1 : 0);

        return score1 > score2 ? first.id : score1 < score2 ? second.id : null;
    }


    render() {
        let av1,av2,winnerId;
        const showComapredAvengers = this.state.first && this.state.second ? true:false;
        if(showComapredAvengers){
             av1 = this.props.avengers.find((av)=>av.id === +this.state.first);
             av2 = this.props.avengers.find((av)=>av.id === +this.state.second);
             winnerId = this.getWinner(av1, av2);
        }
        return (
            <div className="row">
                <div className="col-6">
                    <select value={this.state.first}
                        onChange={(ev) => this.setState({first:ev.target.value})}
                    >
                        <option value="" disabled>Select First</option>
                        {this.props.avengers.map(av =>
                            <option value={av.id} key={av.id}>{av.name}</option>
                        )}
                    </select>
                    { showComapredAvengers &&
                        <ComparedAvenger avenger={av1} won={av1.id == winnerId || !winnerId} />
                    }
                </div>


                <div className="col-6">
                    <select value={this.state.second}
                        onChange={(ev) => this.setState({ second: ev.target.value })}
                    >
                        <option value="" disabled>Select Second</option>
                        {this.props.avengers.map(av =>
                            <option value={av.id} key={av.id}>{av.name}</option>
                        )}
                    </select>
                    { showComapredAvengers &&
                        <ComparedAvenger avenger={av2} won={av2.id == winnerId || !winnerId} />
                    }
                </div>
            </div>
        )
    }
}