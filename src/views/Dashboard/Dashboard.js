import React from 'react';
 import './Dashboard.css';
import { Search } from '../../components/Search/Search';

export const Dashboard = ({ avengers, match, location, history }) => {
    console.log(avengers);

    const top4 = giveTopFourAvengers(avengers);
    return (
        <React.Fragment>
        <h4>Top Avengers</h4>
        <div className="row">
            {top4.map(av => (
                <div key={av.id} className="col-6 col-md-3" 
                style={{cursor:'pointer'}} title="Click to view Details"
                onClick={()=>onAvengerClick(history,av.id) }
                >
                    <div className="card">
                        <img className="card-img-top shortImg"  src={av.imgUrl} alt="Avenger" />
                        <div className="card-body cardBody">
                            <h5 className="card-title">{av.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <Search list={avengers} />
        </React.Fragment>
    );
};

const onAvengerClick=(history,id)=>{
    history.push(`/list/${id}`);
}



const giveTopFourAvengers = (avengers) => {
    return avengers.sort((a, b) => isFirstPopularThanSecond(a, b)?  -1: 1).slice(0, 4);
}

/**@returns true if first avenger is more/equal popular to second one, false otherwise*/
const isFirstPopularThanSecond = (av1, av2) => {

    const p1 = av1.rating + av1.powers.length + (av1.hasDedicatedMovie ? 1 : 0),
        p2 = av2.rating + av2.powers.length + (av2.hasDedicatedMovie ? 1 : 0);

    return p1 >= p2;
}