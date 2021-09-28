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
    <section className="md:w-1O/12 m-auto  flex flex-col justify-center ">
      <div className=" w-10/12 m-auto md:space-x-10 mb-10 md:mb-0 flex flex-col md:flex-row mb-16">
        <GatsbyImage image={data.datoCmsDescriptionCeinturePageProduit.imageCeinture.gatsbyImageData}           className="rounded-lg mb-10 md:mb-2"

          />       

        <article className=" w-12/12 md:w-2/3">
          <h1 className=" m-auto text-4xl mb-10"> la ceinture</h1>
           <div className=" md:text-lg m-auto  w-12/12" dangerouslySetInnerHTML={{ __html: data.datoCmsDescriptionCeinturePageProduit.introduction }} />

        </article>
     
      </div>
      <article className="w-10/12 mb-20 m-auto">
        <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsDescriptionCeinturePageProduit.descriptionCeinture }} />
        <button className="or font-bold text-sm p-2 rounded">
            <Link to="#">En savoir plus sur la ceinture</Link>
          </button>
        </article>
      <h1 className=" w-10/12 m-auto titre text-4xl mb-5 md:mb-20"> Les ceintures</h1>
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
