import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"
import Navbar from "./navbar/navbar"
import { Helmet } from "react-helmet"
 const HeaderProvi = ({ siteTitle }) => (
  <>
    <Navbar />
  </> 
)

HeaderProvi.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderProvi.defaultProps = {
  siteTitle: ``,
}

export default HeaderProvi
