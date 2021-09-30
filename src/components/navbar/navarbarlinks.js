
import React from "react"
import { Link } from "gatsby"
import Logo from "../../components/logo"

const NavbarLinks = () => {
  return (
       <div className=" w-12/12 text-lg  ">

    <figure className="hidden md:block">
         <Logo className="hidden md:block" />
        </figure> 
      <ul className="flex flex-col md:flex-row justify-center space-x-5 md:my-5">

        <li>
          <Link to="/">
            Accueil
          </Link>
        </li>
         

        <li>
        <div class="dropdown inline-block relative">
    <button class="    rounded inline-flex items-center">
      <Link to="/boutique">
            Boutique
          </Link>
      <svg class="fill-current h-4 w-4 mr-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 1  2.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden z-50 bg-white px-2 text-gray-700  pt-1">
      <li class=""><Link to="/ceintures">
            Les ceintures
          </Link></li>
    
    </ul>
  </div>
        </li>

        <li>
          <Link to="/ceinture">
            la ceinture
          </Link>
        </li>
        <li>
          <Link to="/collaboration">
            Collaboration
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
          </li>
     
      </ul>

    </div>
  )
}



export default NavbarLinks