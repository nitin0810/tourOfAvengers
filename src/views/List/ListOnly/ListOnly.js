import React from 'react';
import { ListItem } from '../Listitem/ListItem';

/**Component that iterates over avengers list and listens for click event on individual avenger */
export const ListOnly = ({ avengers,onAvengerClick,selectedId}) => {

    return (
            <ul style={{margin:0,padding:0}}>
                {avengers.map(avenger =>
                    <ListItem key={avenger.id}
                        isSelected={avenger.id === selectedId}
                        onClick={() => onAvengerClick(avenger.id)}>
                        {avenger}
                    </ListItem>
                )}
            </ul>
    );
}
