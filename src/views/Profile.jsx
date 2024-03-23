import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountries } from "../services/countries";
import authQueries from "../services/authQueries";
import { error, success } from "../utils/alerts";
import {update} from '../redux/actions/userAction'

const Profile = ( ) => {
    const dispatch = useDispatch()
    const user = useSelector( store => store.user.user)
    const [countries, setCountries] = useState([])
    const navigate =  useNavigate();
    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        country: user.country,
    })
    useEffect(() =>{
        getCountries().then(setCountries)
    }, []);

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
        authQueries.update(aux).then((response) => {
            console.log(response);
            if(response.status == 201){
                success("Updated Profile")
                dispatch(update(response.formData))
            }else{
                error(response.statusMsg);
            }
        });
    }

    return (
        <>
            <div className="flex flex-col min-h-[100vh] bg-slate-300">
                <Header></Header>
                <main className="grow flex justify-center items-center bg-slate-500 p-20">
                    <article className="w-10/12 h-[400px] flex flex-col justify-center items-center ">
                        <img className=" w-28 h-28 object-cover rounded-full" src={user.image || '/avatar-user.png'} alt="" />
                        <h2 className="text-center font-bold text-2xl p-3 text-red-800">Profile of: {user.first_name}</h2>
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
                                   defaultValue={user.first_name}
                                />
                                <input 
                                    className="rounded px-1 outline-none " 
                                    type="text" 
                                    placeholder="Last Name:" 
                                    name="last_name"
                                    required 
                                    defaultValue={user.last_name}
                                />
                                <input 
                                    className="rounded px-1 outline-none" 
                                    type="email" 
                                    placeholder="Email:" 
                                    name="email"
                                    required 
                                    defaultValue={user.email}
                                />
                                
                                <input 
                                    className="rounded px-1 outline-none" 
                                    type="text" 
                                    name="image" 
                                    placeholder="URL Image: " 
                                    defaultValue={user.image}
                                />
                                <select 
                                    name="country" 
                                    className="rounded px-1 outline-none"
                                    required
                                    value={formData.country}
                                >
                                    {countries.length > 0 &&
                                        countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                </select>
                                <input 
                                  type="submit"  
                                  className="text-center font-semibold border border-black px-5 cursor-pointer text-white bg-slate-800 hover:bg-white hover:text-slate-800 rounded-lg"
                                  value="Update Profile"
                                />
                            </form>  
                    </article>
                </main>
                <Footer></Footer>
            </div>
        </>
    )                    
}

export default Profile;