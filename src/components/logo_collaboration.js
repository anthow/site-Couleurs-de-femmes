import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoCollaboration() {
  const data = useStaticQuery(graphql`
    query logoCollaborationQuery {
      datoCmsLogo {
        logoCollaboration {
                gatsbyImageData(aspectRatio: 3.1 
                  breakpoints: 10
                  )

            
        }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage  image={data.datoCmsLogo.logoCollaboration.gatsbyImageData}   className="w-full h-full" imgStyle={{objectFit: 'cover'}} />
    </header>
  )
}