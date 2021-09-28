import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoCollaboration from "../components/logo_collaboration"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const collaboration = ({ data })  => (

  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
    <header className=" w-12/12 mb-10  md:mb-32 ">

    <figure>
         <LogoCollaboration />
        </figure>
        <HeaderProvi />
</header>
     
    </section>
    <section className="md:w-10/12 m-auto  flex flex-col justify-center ">
      <div className=" md:w-9/12 m-auto space-x-4 flex flex-col md:flex-row md:mb-16">
        <GatsbyImage image={data.datoCmsCollaboration.imagesCollaboration[0].gatsbyImageData}           className="rounded-lg mb-2"

          />       

        <article className=" md:w-2/3">
          <h1 className="mb-5 mt-5 md:-mt-0 text-3xl md:text-4xl"> {data.datoCmsCollaboration.nomCollaboration}</h1>
           <div className="text-sm m-auto w-10/12 md:12/12 mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsCollaboration.texteCollaboration }} />


        </article>
      </div>
      <h1 className="  w-10/12 md:w-12/12 m-auto titre text-4xl mb-10 md:mb-20"> Les articles </h1>
      <div className=" w-10/12 md:w-12/12 flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    data.allDatoCmsBoutique.edges.map(({ node }) => (
<>
<article>

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
    datoCmsCollaboration {
        texteCollaboration
        nomCollaboration
        imagesCollaboration {
          gatsbyImageData
        }
      }
      allDatoCmsBoutique(filter: {collaboration: {eq: true}}){
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

export default collaboration
