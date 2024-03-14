import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCities } from "../services/citiesAPI";
import { useEffect, useState, useRef } from "react";
import CardsCities from "../components/CardsCiudades";

const Cities = () => {
   const [cities, setCities] = useState([]);
   const [filtered, setFiltered] = useState([]);
   const busqueda = useRef(null)

   useEffect(() => {
       getCities().then( data => {
           setCities(data);
           setFiltered(data)
        })
    }, [] );

   const handleInput = () => {
        const filtrados = filterByCity(cities, busqueda.current.value)
        setFiltered(filtrados);
    }

    const filterByCity = (listaCities, value) => {
        return listaCities.filter( ( city ) => 
            city.name.toLowerCase().startsWith(value.toLowerCase().trim())
        );
    };

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
                        />
                    </search>
                    <div className=" grid grid-cols-2 gap-5">
                        {filtered.length > 0 ? <CardsCities cities={filtered}/> : (<p className="p-5 underline">The city was not found.</p>)}
                    </div>
            </main>
            <Footer className=""></Footer>
        </div>
    )
}

export default Cities;