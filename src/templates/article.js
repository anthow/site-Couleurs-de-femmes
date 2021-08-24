import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
export default function ProductPage({ data: { product } }) {
  return (
    <React.Fragment>


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
        <section className=" w-10/12 md:w-8/12 m-auto mb-20 flex flex-col  justify-center  ">
<div className="flex flex-col md:flex-row    md:space-x-40 ">


    <div className="md:grid md:grid-cols-4 place-items-stretch space-y-5 w-5/12 " >
        <div className="col-span-4">
        <figure className="">
      </figure>        
      </div>
      <figure className="hidden md:block">
      <GatsbyImage image={product.imagesProduits[0].gatsbyImageData}   className="rounded-lg mb-2"/>

      </figure>        
      <figure className="hidden md:block">
      <GatsbyImage image={product.imagesProduits[1].gatsbyImageData}   className="rounded-lg mb-2"/>

      </figure>        <figure className="hidden md:block">
      <GatsbyImage image={product.imagesProduits[2].gatsbyImageData}   className="rounded-lg mb-2"/>

      </figure>        <figure className="hidden md:block">
             <GatsbyImage image={product.imagesProduits[3].gatsbyImageData}   className="rounded-lg mb-2"/>

      </figure>        
      </div>
      <article>
      <h1 className=" text-3xl md:text-4xl mb-4 text-center md:text-left">{product.nomDuProduit}</h1>
      <p className="mb-10">{product.prix}</p>
<div className="flex flex-row mb-4 space-x-2 content-center ">
    <p> Tissus uni </p>




    
    <select className="px-2 border rounded">
    <option value="blanc">blanc</option>
    <option value="blanc">rouge</option>
    <option value="blanc">noir</option>

    </select>
     </div>
     <div className="flex flex-row space-x-2 mb-10">
    <p> Quantité </p>
    <input type="number" className="border rounded px-2 w-1/3 content-center " placeholder="1"></input>
     </div>
     <div className="flex flex-row space-x-2">
        <button className="or text-sm md:text-lg p-2 rounded text-bold"> ajouter au panier</button>
        <button className="or p-2 text-sm md:text-lg rounded text-bold"> me contacter</button>
</div>
      </article>
    </div>

</section>
<section className=" w-10/12 md:w-8/12 border p-4 md:p-12 m-auto ">
    <h2 className="mb-5 text-3xl"> Description </h2>
    <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: product.description }} />

</section>
  </Layout>


    </React.Fragment>
  );
}

export const query = graphql`
query ProductPageQuery($url: String){
  
   product: datoCmsBoutique(url: {eq: $url}) {
      couleursTissuUni
      description
      imagesProduits {
        gatsbyImageData
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


