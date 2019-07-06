
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Compare.css';
const ComparedAvenger = ({ avenger, won }) => {


    return (
        <div className={'card av-cmp-card '+(won?'av-cmp-card-winner':'av-cmp-card-loser')}>
            <img className="card-img-top" style={{ height: '200px' }} src={avenger.imgUrl} alt="Avenger pic" />
            <div className="card-body">
                <h5 className="card-title">{avenger.name}</h5>
                <div>
                    <h6 className="cmp-property">Has Dedicated Movie </h6>
                    <i className={"cmp-value fa " + (avenger.hasDedicatedMovie ? "fa-check" : "fa-times")}></i>
                </div>
                <div> <h6 className="cmp-property"> Rating :</h6>
                    <StarRatingComponent
                    className="cmp-value"
                        name="rate1"
                        editing={false}
                        value={avenger.rating}
                    />
                </div>
                <div>
                    <h6 className="cmp-property">Total Powers : </h6>
                    <div className="cmp-value" style={{textAlign:'right'}}>
                    <span >{avenger.powers.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparedAvenger;