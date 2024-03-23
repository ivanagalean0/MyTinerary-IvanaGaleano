import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getCountries} from '../services/countries'
import authQueries from '../services/authQueries';
import {success, error} from '../utils/alerts';

function Register(){
    const [countries, setCountries] = useState([])
    const navigate =  useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
    })
    useEffect(() =>{
        getCountries().then(setCountries)
    }, [])

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        const aux = {...formData};
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const aux = { ...formData };
        for (const key in aux) {
            if(!aux[key]) delete aux[key];
        }
        authQueries.register(aux).then((response) => {
            if(response.status == 201){
                success("The account was successfully created! You can login")
                navigate('/login')
            }else{
                error(response.statusMsg);
            }
        });
    }

    return (
        <>
            <div className="flex flex-col min-h-[100vh] bg-slate-300">
                <Header></Header>
                <main className="grow flex justify-center items-center fondo-home p-20 ">
                    <div className="flex flex-row justify-between shadow-2xl shadow-black">
                        <div className=" w-10/12 p-10 bg-slate-300 rounded-l-lg ">
                            <h2 className="text-center font-bold text-2xl pb-5">Sign up here!</h2>
                            <form 
                              className="flex flex-col gap-5"
                              onSubmit={handleSubmit}
                              onInput={handleInput}
                            >
                                <input 
                                   className="rounded px-1 outline-none" 
                                   type="text"
                                   placeholder="Name:" 
                                   name="first_name" 
                                   required 
                                   onInput={(e) => {
                                    setFormData({...formData, first_name: e.target.value})
                                   }}
                                />
                                <input 
                                    className="rounded px-1 outline-none " 
                                    type="text" 
                                    placeholder="Last Name:" 
                                    name="last_name"
                                    required 
                                />
                                <input 
                                    className="rounded px-1 outline-none" 
                                    type="email" 
                                    placeholder="Email:" 
                                    name="email"
                                    required 
                                />
                                <input 
                                    className="rounded px-1 outline-none" 
                                    type="password" 
                                    placeholder="Password: " 
                                    name="password"
                                    required
                                />
                                <input 
                                    className="rounded px-1 outline-none" 
                                    type="text" 
                                    name="image" 
                                    placeholder="URL Image: " 
                                />
                                <select 
                                    name="country" 
                                    className="rounded px-1 outline-none" 
                                    required
                                    defaultValue={formData.country}
                                >
                                    <option value="" selected disabled>Select your country</option>
                                    {countries.length > 0 &&
                                        countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))
                                    }
                                </select>
                                <input 
                                  type="submit"
                                  className="text-center font-semibold border-black px-5 cursor-pointer text-white bg-slate-800 hover:bg-blue-900 hover:text-white rounded-lg"
                                    value="Sign up"
                                />
                            </form>
                        </div>

                        <div className=" w-10/12 p-10 flex flex-col text-white bg-blue-900 items-center gap-5 justify-center rounded-r-lg ">
                            <h1 className="font-bold ">WELCOME BACK!</h1>
                            <h2 className="">Do you already have an account?</h2>
                            <Link to="/login" className="text-center font-semibold border-black px-5 w-full cursor-pointer  text-white bg-slate-800 hover:bg-white hover:text-slate-800 rounded-lg">
                                Login
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Register;