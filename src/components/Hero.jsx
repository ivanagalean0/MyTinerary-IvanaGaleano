import { Link } from "react-router-dom";

const Hero = ({}) => {
    return(
        <div className='fondo-home grow flex flex-col items-center p-5 text-slate-800'>
            <h2 className='text-6xl  font-bold pt-20'>My Tinerary</h2>
            <p className='text-4xl text-center p-20'>Find your perfect trip, designed by insiders who know and love their cities!</p>
            <div className='border rounded-lg border-white text-center p-10 px-40 text-white'>
              <h2 className='text-2xl font-semibold'>Find the perfect destination</h2>
              <p className='py-5 text-xl  text-center'>Explore a wide variety of destinations, find the perfect itineraries for your trips, and create unforgettable memories on every adventure. Are you ready to embark on a unique experience full of discoveries and new experiences?</p>
                <button className='rounded-xl p-3 font-bold bg-white text-slate-800  hover:bg-slate-800 hover:text-white '>
                    <Link to="/cities">
                        View More Cities
                    </Link>
                        
                </button>
            </div>
        </div>
    )
}

export default Hero;