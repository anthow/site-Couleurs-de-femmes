import * as React from "react"
import { Link } from "gatsby"
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
    <header className=" w-12/12 mb-32 ">

    <figure>
         <LogoBoutique />
        </figure>
        <HeaderProvi />
</header>
</section>
        <section className="w-10/12 m-auto flex flex-col justify-center ">
<h1 className=" titre text-4xl mb-20"> Boutique</h1>

<div className="flex flex-col md:grid md:grid-cols-4 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    data.allDatoCmsBoutique.edges.map(({ node }) => (
<>
<article>

      <Link to={node.url} > 
      <figure className="">

      <GatsbyImage image={node.imagesProduits[0].gatsbyImageData}           className="rounded-lg mb-2"
 />
</figure>
<h2 className="text-lg text-center mb-1">{node.nomDuProduit}</h2>
<p className="text-sm text-center text-gray-600">{node.prix} euros</p>


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
    
    allDatoCmsBoutique {
      edges {
        node {
          couleursTissuUni
          description
          id
          nomDuProduit
          prix
          originalId
          typeDeProduit
          url
          imagesProduits {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Boutique
