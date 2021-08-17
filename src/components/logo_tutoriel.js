import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoTutoriel() {
  const data = useStaticQuery(graphql`
    query logoTutorielQuery {
      datoCmsLogo {
        logoPageTutoriel {
          gatsbyImageData(width: 3000
            height:1000
            )
        }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage image={data.datoCmsLogo.logoPageTutoriel.gatsbyImageData}  />
    </header>
  )
}