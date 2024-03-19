import '../App.css'
import {Ciudades} from '../data/data'
import LayoutMain from './LayoutMain';
import Carrousel from '../components/Carrousel';
import { useState } from 'react';

function Home() {
    const citieSlice1 = Ciudades.slice(0, 4);
    const citieSlice2 = Ciudades.slice(5, 9);
    const citieSlice3 = Ciudades.slice(10, 14);
    const [currentSlice, setCurrentSlice] = useState(1)

    const anterior = () => {
        setCurrentSlice(prevSlice => prevSlice === 1 ? 3 : prevSlice -1);
    }
    const siguiente = () => {
        setCurrentSlice(nextSlice => nextSlice === 4 ? 1 : nextSlice + 1);
    }
    let currentCitiesSlice;
    if(currentSlice === 1){
        currentCitiesSlice = citieSlice1;
    }else if(currentSlice === 2){
        currentCitiesSlice = citieSlice2;
    }else {
        currentCitiesSlice = citieSlice3;
    }

  return (
        <>
        <LayoutMain>
            <main className='flex flex-col grow text-center'>
                {/* CARROUSEL */}
                <div className='flex flex-row justify-evenly p-20 py-30 bg-slate-500 '>
                    <section className='flex flex-wrap justify-center w-full p-20 items-center bg-slate-300 rounded-xl shadow-2xl shadow-black'>
                        <h2 className='pb-10 text-2xl md:text-4xl font-serif font-semibold text-slate-800'>POPULAR MYTINERARIES</h2>
                        <div className='flex flex-col gap-3 w-10/12 lg:w-11/12 items-center lg:justify-between lg:flex-row '>
                            <button onClick={anterior}>
                                <img src="./images/flecha-izquierda.png" alt="" />
                            </button>
                            <Carrousel cities={currentCitiesSlice}/>
                            <button onClick={siguiente}>
                                <img src="./images/flecha-derecha.png" alt="" />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </LayoutMain>
            
        </>    
    )
}

export default Home;


// condicion 
// ? si se cumple
// : si no se cumple
