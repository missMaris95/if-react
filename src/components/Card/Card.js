import React from "react";
import './Card.css'

export function Card ({ id, name, city, country, imageUrl }) {
    return(
        <section >
            <img className='item-homes__icon' src={imageUrl} alt={name}/>
            <p className='item-name'>{name}</p>
            <p className='item-homes__country'>
                {city}, {country}
            </p>
        </section>
    )
}
