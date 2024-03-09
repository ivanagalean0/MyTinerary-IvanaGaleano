
import { Link, useLoaderData, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  const links = [
    {
      path: "/", title:"Home", active: "/" == location.pathname
    },
    {
      path: "/cities", title:"Cities", active:"/cities" == location.pathname
    }
  ];




    return (
        <header className='flex sm:flex-col md:flex-row sm:text-center max-[640px]:flex-col max-[640px]:items-center gap-5 justify-between items-center px-10'>
          <img className='w-32' src="/public/images/icon-travel.png" alt="" />
          <nav className='flex flex-row gap-5 sm:justify-evenly '>
            <Link className='text-xl p-2 hover:text-blue-900 font-bold hover:underline hover:underline-offset-8' to="/">Home</Link>
            <Link className='text-xl p-2 hover:text-blue-900 font-bold hover:underline hover:underline-offset-8' to="/cities">Cities</Link>
            <Link className='flex flex-row text-xl p-2 hover:text-blue-900 font-bold hover:underline hover:underline-offset-8' to="/login">Login
              <img className='w-5 object-cover ml-2 items-center' src="/public/images/avatar-user.png" alt="" />
            </Link>
          </nav>
        </header>
    )
}


export default Header;