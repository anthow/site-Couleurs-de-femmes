import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"

 const Header = ({ siteTitle }) => (
  <header className="   w-12/12 ">
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

        <li className="group">
          <div class="relative ">
            <Link to="/">
              <button class="flex items-center block  bg-white  rounded-md w-auto">

                <span class="mr-4">Boutique</span>
                <svg class="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <div class="absolute hidden group-hover:block  right-0 py-2 mt-2 bg-white  rounded-md shadow-xl w-44 ">
                <Link to="#" class="block px-4 py-2 text-sm text-gray-300 text-gray-700 sub-menu hover:text-white block whitespace-no-wrap"
                >
                  <p className="text-xs hover:text-white">les ceintures</p>
                </Link>
                <Link to="#" class="block px-4 py-2 text-sm text-gray-300 text-gray-700 sub-menu hover:text-white">
                  <p className="text-xs hover:text-white"> Les culottes </p>
                </Link>
                <Link to="#" class="block px-4 py-2 text-sm text-gray-300 text-gray-700 sub-menu hover:text-white">
                  <p className="text-xs hover:text-white">  Dropdown List 3</p>
                </Link>

              </div>

            </Link>
          </div>
        </li>
        <li>
          <Link to="/">
            Professionels
          </Link>
        </li>
        <li>
          <Link to="/">
            Tutoriels
          </Link>
        </li>
        <li>
          <Link to="/">
            Collaboration
          </Link>
        </li>
        <li>
          <Link to="/">
            Contact
          </Link>
        </li>
      </ul>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
