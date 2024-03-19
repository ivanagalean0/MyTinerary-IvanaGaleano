import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getCityById } from "../services/citiesAPI";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../App.css'

const DetailsCities = () => {
    const cityId = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        getCityById(cityId.id)
        .then((res) => {
            if(res.data){
                setData(res.data)
            }else{
                    alert('city not available, you will be redirected to Cities.')
                    navigate('/cities')
            }
        })
        .finally( () => setLoading(false));
    }, [])

console.log(data);


    if (loading) {
        return (
            <div className="flex flex-col grow min-h-[100vh] bg-slate-300">
            <Header></Header>
            <main className="flex flex-col justify-center items-center p-5 bg-slate-500">
                <h1 className=" font-bold text-4xl text-center p-5">
                    Loading...
                </h1>
            </main>
            <Footer></Footer>
        </div>
        )
    }

    return (
         <div className="flex flex-col grow min-h-[100vh] bg-slate-300">
            <Header></Header>
            <main className="flex flex-col justify-center items-center p-5 fondo-home">
                <h1 className=" font-bold text-4xl text-center p-3 ">
                    DETAILS CITIES 
                </h1>
                <div className="flex flex-col py-5 w-full bg-slate-500 text-xl rounded">
                    <h2 className="text-5xl pb-3 text-white text-center">{data.name}</h2>
                    {data.itineraries.length > 0 ? (
                        <>
                            {data.itineraries.map(itinerary => (
                                <>
                                <div className="flex flex-col px-5 py-2 gap-5 border rounded">
                                    <h2 className="text-3xl text-center font-semibold w-full">{itinerary.title}</h2>
                                    <div className="flex flex-row">
                                        <img className="w-52 lg:w-80 object-cover" key={itinerary._id} src={itinerary.guide_image}></img>
                                        <div className="flex flex-col justify-center text-lg pl-3 gap-3 bg-slate-400">
                                            <h2>Guide: {itinerary.guide} </h2>
                                            <h2>Duration: {itinerary.duration} hs</h2>
                                            <h2 className="">Description: {itinerary.description}</h2>
                                            {itinerary.hashtags.map((hashtag) => (
                                                <Link className="font-semibold hover:underline">{hashtag}</Link>
                                            ))}

                                        </div>
                                    </div>
                                    <h2 className=" text-center font-bold">Activities: </h2>
                                    <div className="flex flex-col items-center lg:flex-row lg:justify-center bg-slate-400">
                                        {itinerary.activities.map((activity, index) => (
                                            <img key={index} src={activity} className="w-72 lg:w-80 object-cover p-3 "></img>
                                        ))}
                                    </div>
                                </div>
                                </>
                            ))}
                        </>
                    ) : (
                        <div className="text-center p-5">
                            <h1>There are still no itineraries for this city.</h1>
                        </div>
                        )}
                         
                </div>
                
                <div className="flex flex-row justify-start p-5">
                    <Link className=" rounded-xl bg-slate-800 text-white py-5 px-2 font-bold " to="/cities">
                        BACK TO CITIES
                    </Link>
                </div>
                
            </main>
            <Footer></Footer>
        </div>
    )
}

export default DetailsCities;