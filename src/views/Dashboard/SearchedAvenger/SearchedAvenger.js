import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'
export const SearchedAvenger = ({id, name, imgUrl, rating, history }) => {

    if (!name) {
        return (
            <div style={{ textAlign: "center" }}>
                <h3>Oops !...</h3>
                <h4>Avenger with the given name doesn't exist yet.</h4>
                <h4>But, you can create one. <Link to="/add">Create</Link></h4>
            </div>
        );
    }

    return (
        <div className="card">
            <img className="card-img-top" style={{ height: '200px' }} src={imgUrl} alt="Avenger pic" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <StarRatingComponent
                    name="rate1"
                    editing={false}
                    value={rating}
                />
                <p>To view more infomation <Link to={`/list/${id}`}>Click Here</Link></p>
            </div>
        </div>
    );
};