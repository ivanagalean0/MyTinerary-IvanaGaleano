import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getCityById } from "../services/citiesAPI";
import { Link, useNavigate, useParams } from "react-router-dom";


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
            <main className="flex flex-col justify-center items-center p-5 bg-slate-500">
                <h1 className=" font-bold text-4xl text-center p-3 border-b">
                    DETAILS CITIES 
                </h1>
                <h2 className="text-3xl text-white ">{data.name}</h2>
                <img className="w-4/12 h-6/12 py-5" src={data.image} alt="" />
                <p className="text-3xl pb-5 text-slate-900 font-semibold">¡Under Construction!</p>

                <Link className=" rounded-xl bg-slate-800 text-white py-5 px-2 font-bold " to="/cities">
                    BACK TO CITIES
                </Link>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default DetailsCities;