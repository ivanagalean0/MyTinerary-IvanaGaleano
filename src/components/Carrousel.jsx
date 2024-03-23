import React from "react";

function Carrousel({cities}) {

    return (
        <>
            {cities.map(city => (
                <article key={city._id} className='lg:w-6/12'>
                    <img className='w-full h-40 object-cover ' src={city.image} alt="" />
                    <h3 className='font-bold italic text-center'>{city.name}, {city.country}</h3>
                </article>
            ))}
        </>
    )    
}

export default Carrousel;
