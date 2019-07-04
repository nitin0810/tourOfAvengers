import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const ListItem = (props) => {

    const { isSelected, onClick } = props;
    return (
        <li style={{ backgroundColor: isSelected ? '#dae0e5' : 'transparent' }} onClick={() => onClick()}>
            <img src={props.children.imgUrl || 'imgs/defaultPic.jpg'} alt="Avenger Img" />
            <h5>{props.children.name}</h5>
            <StarRatingComponent
                name="rate1"
                editing={false}
                value={props.children.rating}
            />
        </li>
    );
}