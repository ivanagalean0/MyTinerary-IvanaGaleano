import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCities } from "../services/citiesAPI";
import { useEffect, useRef } from "react";
import CardsCities from "../components/CardsCities";
import { agregarCiudades, cambiarSearch, filtrarPorNombre } from "../redux/actions/citiesAction";
import {  useDispatch, useSelector } from "react-redux"; 
// para emitir una accion 

const Cities = () => {
   const busqueda = useRef(null)

   const dispatchCities = useDispatch();

   const dispatch = useDispatch();
   const {allCities, citiesFilter, search} = useSelector( (store) => store.cities)

//    recibo las ciudades
   useEffect(() => {
    if (allCities.length == 0) {
        getCities().then( data => {
            dispatchCities(agregarCiudades(data))
            dispatch(filtrarPorNombre(busqueda.current.value))
        })
    }
       
    }, [] );

   const handleInput = () => {
    // cuando se ejecute esta funcion, le tiene que mandar el nuevo search al store
    dispatch(cambiarSearch(busqueda.current.value))
    dispatch(filtrarPorNombre(busqueda.current.value))
   }

    return (
        <div className="flex flex-col grow min-h-[100vh] bg-slate-300">
            <Header></Header>
            <main className="flex flex-col justify-center items-center p-5 bg-slate-500">
                    <h1 className=" font-bold text-4xl text-center p-5">
                        ALL THE CITIES YOU CAN VISIT!
                    </h1>
                    <search className="flex justify-center">
                        <input 
                            type="text" 
                            className="rounded text-black outline-none p-2"
                            placeholder="Search city:"
                            onInput={handleInput}
                            ref={busqueda}
                            defaultValue={search}
                        />
                    </search>
                    <div className="flex flex-col w-86 md:grid md:grid-cols-2 md:gap-5 ">
                        {citiesFilter.length > 0 ? <CardsCities cities={citiesFilter}/> : (<p className="p-5 underline">The city was not found.</p>)}
                    </div>
            </main>
            <Footer className=""></Footer>
        </div>
    )
}

export default Cities;