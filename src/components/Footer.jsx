import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className='bg-slate-300 p-5 text-center'>
            <div className="flex flex-col justify-evenly  max-[640px]:flex-col max-[640px]:items-center">
                <div className="flex  max-[640px]:flex-wrap justify-evenly font-semibold items-center pb-3">
                    <a className="hover:text-blue-900 flex flex-row items-center" href="mailto:galeanoivanamagali@gmail.com"> 
                        <img className="w-10 h-10 object-cover m-3" src="/public/images/gmail-icons.png" alt="" />
                        Email
                    </a>
                    <a className="hover:text-blue-900 flex flex-row items-center" href="https://www.instagram.com/">
                        <img className="w-10 h-10 object-cover m-3" src="/public/images/instagram-icons.png" alt="" /> 
                        Instagram
                    </a>
                    <a className="hover:text-blue-900 flex flex-row items-center" href="https://twitter.com/">
                        <img className="w-10 h-10 object-cover m-3" src="/public/images/twitter-icons.png" alt="" />
                        Twitter
                    </a>
                    <a className="hover:text-blue-900 flex flex-row items-center" href="https://www.facebook.com/">
                        <img className="w-10 h-10 object-cover m-3" src="/public/images/whatsapp-icons.png" alt="" /> 
                        Facebook
                    </a>
                </div>

                <div className=" items-center py-5 border-t-2">
                    <ul className=" flex flex-row gap-5 justify-center pb-3 text-xl font-bold">
                        <li><Link className=" hover:text-blue-900 underline underline-offset-8" to="/">Home</Link></li>
                        <li><Link className=" hover:text-blue-900 underline underline-offset-8" to="/cities">Cities</Link></li>
                        <li><Link className=" hover:text-blue-900 underline underline-offset-8" to="/login">Login</Link></li>
                    </ul>

                    <h3 className="">For more information about this site's privacy policy, please <a className="font-bold hover:underline" href="">click here</a></h3>

                </div>

            </div>
        </footer>
    )
}

export default Footer;