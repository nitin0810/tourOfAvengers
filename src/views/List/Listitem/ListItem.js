import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const ListItem = (props) => {

    const { isSelected, onClick } = props;
    let s = { width: '100%',padding:'5px',cursor:'pointer' };
    const s2={margin:0,padding:0};
    if (isSelected) { s['backgroundColor'] = '#d3d3d354'; }
    return (
        <div style={s} onClick={onClick}>
            <img src={props.children.imgUrl || 'imgs/defaultPic.jpg'} alt="Avenger Img"
                style={{ height: '50px', width: '50px', border: '2px solid black', borderRadius: '50%', float: 'left',margin:'0px 10px 0px 0px' }} />
            <h5 style={s2}>{props.children.name}</h5>
            <StarRatingComponent
              name="rate1" 
              editing={false}
              value={props.children.rating}
            />
        </div>
    );
}