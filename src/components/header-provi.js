import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"

 const HeaderProvi = ({ siteTitle }) => (
  <header className=" w-12/12 mb-32 ">
    <div className=" flex flex-col items-center w-12/12">
      <Link
        to="/">
        <figure>
         <Logo />
        </figure>
      </Link>
    </div>
    <div className=" w-12/12 my-2 ">
      <ul className="flex justify-center space-x-5">

        <li>
          <Link to="/index-deux">
            sans video
          </Link>
        </li>
         

        <li>
        <div class="dropdown inline-block relative">
    <button class="   px-4 rounded inline-flex items-center">
      <Link to="/boutique">
            Boutique
          </Link>
      <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700  pt-1">
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
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>

    </div>
  </header>
)

HeaderProvi.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderProvi.defaultProps = {
  siteTitle: ``,
}

export default HeaderProvi
