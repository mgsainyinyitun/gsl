import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import React,{useState} from "react";
import { ROUTES } from '../../constants/routes/RoutesConstant';
import {useLocation} from 'react-router-dom';
import LOGO from '../../images/icon.ico';

function displayMobileMenu(display,setDisplay){
  if(display==='hidden'){setDisplay('block')}else setDisplay('hidden');
  console.log(display);
}

function Navigation() {

  const location = useLocation().pathname;
  const [display,setDisplay] = useState('hidden');

    return (
      <nav className="bg-gray-800 shadow-lg rounded-b-2xl relative top-0 left-0 right-0 h-16">
        <div className="bg-gray-800 shadow-lg md:rounded-b-2xl rounded-none  md:hover:translate-y-6 transition  duration-300">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

                <div className="flex space-x-7">

                  <div>
                    <a href="#" className="flex items-center py-4 px-2">
                    <img src = {LOGO} className='w-14'/>
                    </a>
                    
                  </div>

                  {/* Primary Menu */}
                  <div className="hidden md:flex items-center space-x-1 text-lg">

                    <Link to={ROUTES.HOME} 
                    className={`hover:text-red-800 py-4 px-2 text-white font-semibold ${location===ROUTES.HOME?'text-red-800':""}` }>
                      HOME
                    </Link>

                    <Link to={ROUTES.SERVICES} 
                    className={`hover:text-red-800  py-4 px-2 text-white font-semibold ${location===ROUTES.SERVICES?' text-red-800':""}` }>
                      SERVICES
                    </Link>


                    <Link to={ROUTES.PARTNER} 
                    className={`hover:text-red-800  py-4 px-2 text-white font-semibold ${location===ROUTES.PARTNER?' text-red-800':""}` }>
                      PARTNER & VENDER
                    </Link>

                    <Link to={ROUTES.ABOUTUS}
                    className={`hover:text-red-800  py-4 px-2 text-white font-semibold ${location===ROUTES.ABOUTUS?' text-red-800':""}` }>
                      ABOUT US
                    </Link>
                  </div>
                  </div>


                  {/* Mobile menu button  */} 
                  <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={()=> displayMobileMenu(display,setDisplay)}>
                    <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
          </div>

          {/* mobile menu */} 
          <div className={`${display} bg-gray-900 p-1`}>
            <ul className="">
              <li className='border-b-2 border-red-700 p-3'>
                    <Link to={ROUTES.HOME} 
                    className={`hover:text-red-800 py-4 px-2 transition duration-300 text-white font-semibold ${location===ROUTES.HOME?'text-red-800':""}` }>
                      HOME
                    </Link>
              </li>
              <li className='p-3 border-b-2 border-red-700'>
                    <Link to={ROUTES.SERVICES} 
                    className={`hover:text-red-800  py-4 px-2  transition duration-300 text-white font-semibold ${location===ROUTES.SERVICES?' text-red-800':""}` }>
                      SERVICES
                    </Link>
              </li>
              <li className='p-3 border-b-2 border-red-700'>
                    <Link to={ROUTES.PARTNER} 
                    className={`hover:text-red-800  py-4 px-2 text-white font-semibold ${location===ROUTES.PARTNER?' text-red-800':""}` }>
                      PARTNER & VENDER
                    </Link>
              </li>
              <li className='p-3'>
                    <Link to={ROUTES.ABOUTUS}
                    className={`hover:text-red-800  py-4 px-2 text-white font-semibold ${location===ROUTES.ABOUTUS?' text-red-800':""}` }>
                      ABOUT US
                    </Link>
              </li>
            </ul>
          </div>
      </nav>

    )
  }


export default Navigation;