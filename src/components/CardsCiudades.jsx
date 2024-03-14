import React from "react";
import { Link } from "react-router-dom";

function CardsCities ({cities}){
    return (
        <>
            {cities.map(city => (
                <article key={city._id} className='w-full m-5 bg-transparent rounded-2xl shadow-2xl shadow-slate-800 '>
                    <img className='w-full h-60 object-cover' src={city.image} alt="" />
                    <h3 className='font-bold text-xl italic text-center text-white p-5'>{city.name}, {city.country}</h3>
                    <Link 
                        to={"/cities/" + city._id}
                        className="text-white flex items-center justify-center pb-5 hover:underline hover:font-bold">
                            Details
                    </Link>
                </article>
            ))}
        </>
    )
}

export default CardsCities;