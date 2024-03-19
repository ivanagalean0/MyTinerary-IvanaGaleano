import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function Header() {
  
  const location = useLocation();
  const links = [
    {path: "/", title:"Home", active: "/" == location.pathname},
    {path: "/cities", title:"Cities", active: "/cities" == location.pathname},
  ]

  links.forEach(link => {
    if(link.path == location.pathname){
      link.active = true;
    }
    
  });
    return (
        <header className='flex sm:flex-col md:flex-row sm:text-center max-[640px]:flex-col max-[640px]:items-center gap-5 justify-between items-center px-10'>
          <img className='w-32' src="/public/images/icon-travel.png" alt="" />
          <nav className='flex flex-row gap-5 sm:justify-evenly '>
            {links.map((link) => (
              <Link 
                key={link.title}
                to={link.path} 
                className={`text-xl p-2 font-bold hover:text-blue-900 hover:underline hover:underline-offset-8 
                  ${link.active ? "text-blue-900 underline underline-offset-8" : ""
                }`}
              >
              {link.title}
              </Link>
            ))}
            <Link 
              className="flex flex-row text-xl p-2 hover:text-blue-900 font-bold hover:underline hover:underline-offset-8"
              to="/login">
                <img className='w-5 object-cover ml-2 items-center' src="/public/images/avatar-user.png" alt="" />
            </Link>
          </nav>
        </header>
    )
}

export default Header;