import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/userAction';


function Header() {
  const user = useSelector((store) => store.user.user);
  // console.log(user);
  const dispatch = useDispatch();
  const location = useLocation();
  const links = [
    {
      path: "/", 
      title:"Home", 
      active: "/" == location.pathname, 
      visible: true
    },
    {
      path: "/cities", 
      title:"Cities", 
      active: "/cities" == location.pathname, 
      visible: true
    },
    {
      path: "/registro", 
      title:"Registration", 
      active: "/registro" == location.pathname, 
      visible: user.first_name ? false : true,
    },
    {
      path: "/login", 
      title:"Login", 
      active: "/login" == location.pathname, 
      visible: user.first_name ? false : true,
    },
    {
      path: "/perfil", 
      title:"Profile", 
      active: "/perfil" == location.pathname, 
      visible: user.first_name ? true : false,
    }
  ]

  const handleClick = () => {
    dispatch(logout());
  }

    return (
        <header className='flex sm:flex-col md:flex-row sm:text-center max-[640px]:flex-col max-[640px]:items-center gap-5 justify-between items-center px-10'>
          <img className='w-32' src="/public/images/icon-travel.png" alt="" />
          <nav className='flex flex-row gap-5 sm:justify-evenly '>
            {links.map( (link) => (
              <Anchor key={link.title} link={link}/> 
            ))}
            {user.first_name && (
                <button 
                  onClick={handleClick} 
                  className='text-xl text-red-700 p-2 font-bold hover:text-blue-900 hover:underline hover:underline-offset-8 '
                >
                  Logout
                </button>
            )}
          </nav>
        </header>
    );
};
const Anchor = ({link}) => {
  if(link.visible){
    return (
      <Link 
        key={link.title}
        to={link.path} 
        className={`text-xl p-2 font-bold hover:text-blue-900 hover:underline hover:underline-offset-8 
          ${link.active ? "text-blue-900 underline underline-offset-8" : ""}`}
      >
        {link.title}
      </Link>
    );
  }
  return null;
}
export default Header;