
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ComparedAvenger = ({ avenger, won }) => {


    return (
        <div className="card" style={{border:'2px solid',borderColor:won?'green':'red'}}>
            <img className="card-img-top" style={{ height: '200px' }} src={avenger.imgUrl} alt="Avenger pic" />
            <div className="card-body">
                <h5 className="card-title">{avenger.name}</h5>
                <p>Has Dedicated Movie <i className={"fa " + (avenger.hasDedicatedMovie ? "fa-check" : "fa-times")}></i></p>
                <div> Rating :
                <StarRatingComponent
                        name="rate1"
                        editing={false}
                        value={avenger.rating}
                    />
                </div>
                <p>Total Powers : {avenger.powers.length}</p>
            </div>
        </div>
    );
};

export default ComparedAvenger;