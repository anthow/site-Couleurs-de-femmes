import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
         <LogoBoutique />
        </figure>
        <HeaderProvi />
</header>
     
    </section>
    <section className="w-10/12 m-auto  flex flex-col justify-center ">
      <div className=" w-9/12 m-auto space-x-4 flex flex-col md:flex-row mb-16">
        <figure className="w-1/3">
        <GatsbyImage image={data.datoCmsDescriptionCeinturePageProduit.imageCeinture.gatsbyImageData}           className="rounded-lg mb-2"

          />        </figure>

        <article className=" w-2/3">
          <h1 className="mb-5 text-4xl"> la ceinture</h1>
           <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsDescriptionCeinturePageProduit.descriptionCeinture }} />

          <button className="or font-bold text-sm p-2 rounded">
            <Link to="#">En savoir plus sur la ceinture</Link>
          </button>

        </article>
      </div>
      <h1 className=" titre text-4xl mb-20"> Les ceintures</h1>
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
    datoCmsDescriptionCeinturePageProduit {
    descriptionCeinture
    imageCeinture {
      gatsbyImageData
    }}
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

export default ListeCeinture
