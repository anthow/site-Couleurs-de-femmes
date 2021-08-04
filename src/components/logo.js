import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function Logo() {
  const data = useStaticQuery(graphql`
    query logoQuery {
      datoCmsLogo {
        logo {
          gatsbyImageData(width: 3000
            height:1000
            )
        }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage image={data.datoCmsLogo.logo.gatsbyImageData}  />
    </header>
  )
}