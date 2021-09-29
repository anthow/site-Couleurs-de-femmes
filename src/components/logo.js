import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function Logo() {
  const data = useStaticQuery(graphql`
    query logoQuery {
      datoCmsLogo {
        logo {
          gatsbyImageData(width: 400)
          
        }
            
        }
      }
  `)
  return (

    <header>
      <figure  className=" w-10/12  mt-5 m-auto align-center hidden md:flex justify-items-center items-center" >
     <GatsbyImage className="m-auto"  image={data.datoCmsLogo.logo.gatsbyImageData}   />
     </figure>
    </header>
  )
}
