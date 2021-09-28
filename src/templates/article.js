import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

const ProductPage = ({ data })  => (



      <Layout>
          <Seo title="Boutique" />
          <section className="w-12/12">
    <header className=" w-12/12 mb-32 ">

    
        <HeaderProvi />
</header>
     
    </section>
        <section className=" w-10/12 md:w-8/12 m-auto mb-20 flex flex-col  justify-center  ">
<div className="flex flex-col md:flex-row    md:space-x-40 ">


          <article>
      <h1 className=" text-3xl md:text-4xl mb-4  mb-8 ">{data.swellProduct.name}</h1>
      <span className=" bg-or text-white font-bold text-xl p-2 ">{data.swellProduct.price} €</span> 
<div className="flex flex-row mb-4 space-x-2 content-center ">


     </div>
     <div className="flexbl block md:flex-row space-x-2 mb-10">
    <p  className="mt-6 "> Quantité </p>
    <input type="number" className="border rounded px-2 w-1/3 md:content-center " placeholder="1"></input>
     </div>
     <select name="variant" id="variant">

   

     {data.allSwellProductVariant.edges.map(node => {
             return(      <option value={node.name}>{node.name}</option>

      )
    })}

</select>
     <div className="flex flex-row space-x-2">
        <button className="or text-sm md:text-lg p-2 snipcart-add-item rounded text-bold"
            data-item-id={data.swellProduct.id}
            data-item-price={data.swellProduct.price}
            data-item-url="/"
            data-item-name={data.swellProduct.name}
            data-item-custom1-name="Couleur tissus uni"
    data-item-custom1-options="bleu|ecru"
        
        > ajouter au panier</button>
        <button className="or p-2 text-sm md:text-lg rounded text-bold"> me contacter</button>
</div>
      </article>
    </div>

</section>
<section className=" w-10/12 md:w-8/12 border p-4 md:p-12 m-auto ">
    <h2 className="mb-5 text-3xl"> Description </h2>
    <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.swellProduct.description }} />

</section>
  </Layout>
  
)

export const query = graphql`
query ProductPageQuery($url: String, $id : String){
  swellProduct (slug: {eq: $url}, id: {eq: $id}  )
  {
    slug
    name
    price
    description
    categories {
      name
      id
    }

      images {
        fileLocal {
          childrenImageSharp {
          gatsbyImageData}
      }
    }
  }
  allSwellProductVariant(filter: {parent_id: {eq: "$id"}}) {
    edges {
      node {
        id
        name
      }
    }
  }
  }
`;
export default ProductPage


