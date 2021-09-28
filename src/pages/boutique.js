import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Boutique = ({ data })  => (
    
  <Layout>
          <Seo title="Boutique" />
          <section className="w-12/12">
    <header className=" w-12/12 mb-10 md:mb-32 ">

    <figure>
         <LogoBoutique />
        </figure>
        <HeaderProvi />
</header>
</section>
        <section className="w-10/12 m-auto flex flex-col justify-center ">
<h1 className=" titre text-4xl mb-10 md:mb-20"> Boutique</h1>

<div className="flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    data.allSwellProduct.edges.map(({ node }) => (
<>
<article className="mb-16 md:mb-0">

      <Link to={node.slug} > 
      <figure className="">

      <GatsbyImage image={node.images[0].fileLocal.childImageSharp.gatsbyImageData}           className="rounded-lg mb-2"
 />
</figure>
<h2 className="text-lg text-center mb-1">{node.name}</h2>
<p className="text-sm text-center text-gray-600">{node.price} euros</p>


</Link>
</article>

</>
    ))}
   
</div>
</section>
  </Layout>
)

export const query = graphql`
  {
    
    allSwellProduct {
      edges {
        node {
          slug
          id
          price
          name
          images {
            fileLocal {
              childImageSharp {
                gatsbyImageData
              }
            
            }
  
          }
        }
      }
    }
  }
`

export default Boutique
