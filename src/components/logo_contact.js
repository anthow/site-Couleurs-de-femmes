import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoContact() {
  const data = useStaticQuery(graphql`
    query logoContactQuery {
      datoCmsLogo {
        logoPageContact {
          gatsbyImageData(width: 3000
            height:1000
            )
        }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage image={data.datoCmsLogo.logoPageContact.gatsbyImageData}  />
    </header>
  )
}