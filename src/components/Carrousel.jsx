import React from "react";

function Carrousel({cities}) {
    return (
        <>
        {cities.map(city => (
            <article key={city.country} className='w-6/12'>
                <img className='w-full h-40 object-cover ' src={city.image} alt="" />
                <h3 className='font-bold italic text-center'>{city.name}, {city.country}</h3>
            </article>
        ))}
        
        {/* <article className='w-6/12 hover:brightness-50'>
            <img className='w-full h-40 object-cover' src={primerSlice[1].image} alt="" />
            <footer className=' bg-white w-full p-1'>
                <h3 className='font-bold italic'>{}, {}</h3>
            </footer>
        </article>
        <article className='w-6/12 hover:brightness-50'>
            <img className='w-full h-40 object-cover' src={primerSlice[2].image} alt="" />
            <footer className=' bg-white w-full p-1'>
                <h3 className='font-bold italic'>{}, {}</h3>
            </footer>
        </article>
        <article className='w-6/12 hover:brightness-50'>
            <img className='w-full h-40 object-cover' src={primerSlice[3].image} alt="" />
            <footer className=' bg-white w-full p-1'>
                <h3 className='font-bold italic'>{}, {}</h3>
            </footer>
        </article> */}
        </>
    )    
}

export default Carrousel;