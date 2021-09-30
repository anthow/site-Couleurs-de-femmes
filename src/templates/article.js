import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { ImageGallery } from "../components/imagegallery/imagegallery"

const ProductPage = ({ data })  => (



      <Layout>
          <Seo title="Boutique" />
          <section className="w-12/12">
    <header className=" w-12/12 mb-32 ">

    <figure>
        </figure>
        <HeaderProvi />
</header>
     
    </section>
        <section className=" w-10/12 md:w-8/12 m-auto mb-20 flex flex-col  justify-center  ">
<div className="flex flex-col md:flex-row    md:space-x-40 ">


    <div className="md:grid md:grid-cols-4 place-items-stretch space-y-5 w-5/12 " >
        <div className="col-span-4">
<ImageGallery images={data.datoCmsBoutique.imagesProduits} />
            
      </div>
  

      </div>
      <article>
      <h1 className=" text-3xl md:text-4xl mb-4 text-center md:text-left">{data.datoCmsBoutique.nomDuProduit}</h1>
      <p className="mb-10">{data.datoCmsBoutique.prix} euros</p> 
<div className="flex flex-row mb-4 space-x-2 content-center ">


     </div>
     <div className="flex flex-row space-x-2 mb-10">
    <p> Quantité </p>
    <input type="number" className="border rounded px-2 w-1/3 content-center " placeholder="1"></input>
     </div>




     <select id="tissus" className="hidden"  
     >
     {data.datoCmsBoutique.couleursUnies.map(node => {
             return(      <option value={node.nom}>{node.nom}</option>

      )
    })}
        
   
      
    </select>
     <div className="flex flex-row space-x-2">
        <button className="or text-sm md:text-lg p-2 snipcart-add-item rounded text-bold"
            data-item-id={data.datoCmsBoutique.id}
            data-item-price={data.datoCmsBoutique.prix}
            data-item-url="/"
            data-item-name={data.datoCmsBoutique.nomDuProduit}
            data-item-custom1-name="Couleur tissus uni"
    data-item-custom1-options=
    {data.datoCmsBoutique.couleursUnies.map((node) => {return((node.nom)+'|')})}

    > Commander </button>

        <button className="or p-2 text-sm md:text-lg rounded text-bold"> Me contacter</button>
</div>
      </article>
    </div>

</section>
<section className=" w-10/12 md:w-8/12 border p-4 md:p-12 m-auto ">
    <h2 className="mb-5 text-3xl"> Description </h2>
    <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsBoutique.description }} />

</section>
  </Layout>
  
)

export const query = graphql`
query ProductPageQuery($url: String){
   datoCmsBoutique(url: {eq: $url}) {
    couleursUnies {
      nom
    }
      description
      imagesProduits {
        originalId
        gatsbyImageData(aspectRatio: 1.1)
        
      }
      id
      typeDeProduit
      nomDuProduit
      prix
      url
      id
    }
  }
`;
export default ProductPage


