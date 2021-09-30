import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ListeCeinture = ({ data })  => (

  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
    <header className=" w-12/12 mb-32 ">

    <figure>
        </figure>
        <HeaderProvi />
        <LogoBoutique />

</header>
     
    </section>
    <section className="md:w-1O/12 m-auto  flex flex-col justify-center ">
     
      <h1 className=" w-10/12 m-auto  text-5xl mb-5 md:mb-10"> Les ceintures</h1>
      <div className=" w-10/12 flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    data.allDatoCmsBoutique.edges.map(({ node }) => (
<>
<article className="mb-16 md:mb-0">

      <Link to={"../boutique/" + node.url} > 
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
    datoCmsDescriptionCeinturePageProduit {
    descriptionCeinture
    introduction
    imageCeinture {
      gatsbyImageData
    }}
    allDatoCmsBoutique (filter: {typeDeProduit: {eq: "Ceinture"}}) {
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

export default ListeCeinture
