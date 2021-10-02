/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 
 //import Header from "./header"
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   
 
   return (


     <>
     <head>
...
<link rel="stylesheet" type="text/css" href="../styles.print.css" media="print" />
...
</head>
<body>
         <main>{children}</main>
         <Footer />
         </body>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 