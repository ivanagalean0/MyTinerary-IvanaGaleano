import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, UNSAFE_DataRouterContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getCountries} from '../services/countries'
import authQueries from '../services/authQueries';
import {success, error} from '../utils/alerts';
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";


function Login(){
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

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
        authQueries.login(aux).then((response) => {
            if(response.status == 200){
                dispatch(login(response.data));
                success("Session successfully started!")
                navigate('/');
            }else{
                error(response.statusMsg);
            }
        });
    }

    return (
        <>
            <div className="flex flex-col min-h-[100vh] bg-slate-300">
                <Header></Header>
                <main className="grow flex justify-center items-center fondo-home p-20">
                    <div className="flex flex-row justify-between shadow-2xl shadow-black">
                        <div className=" w-10/12 p-10 bg-slate-300 rounded-l-lg">
                            <h2 className="text-center font-bold text-2xl pb-5">Login to your account </h2>
                            <form 
                              className="flex flex-col gap-5"
                              onSubmit={handleSubmit}
                              onInput={handleInput}
                            >
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
                                  type="submit"  
                                  className="text-center font-semibold border-black px-5 cursor-pointer text-white bg-slate-800 hover:bg-blue-900 hover:text-white rounded-lg"
                                  value="Enter"
                                  />
                            </form>                        
                        </div>

                        <div className="w-10/12 p-10 flex flex-col items-center gap-5 justify-center rounded-r-lg text-white bg-blue-900">
                            <h1 className="font-bold ">WELCOME!</h1>
                            <h2 className="text-center">Don't have an account?</h2>
                            <Link to="/registro" className="text-center font-semibold  border-black px-3 w-full cursor-pointer  text-white bg-slate-800 hover:bg-slate-300 hover:text-slate-800 rounded-lg">
                                Register
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Login;