import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoBoutique() {
  const data = useStaticQuery(graphql`
    query logoboutiqueQuery {
      datoCmsLogo {
        logoPageBoutique {
          gatsbyImageData(width: 3000
            height:1000
            )
        }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage image={data.datoCmsLogo.logoPageBoutique.gatsbyImageData}  />
    </header>
  )
}