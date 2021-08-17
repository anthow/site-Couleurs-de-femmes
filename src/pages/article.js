import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"
const article = () => (
    
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


    <div className="md:grid md:grid-cols-4 place-items-stretch space-y-5 " >
        <div className="col-span-4">
        <figure className="">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={500}
          height={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        
      </div>
      <figure className="hidden md:block">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2 "
        />
      </figure>        
      <figure className="hidden md:block">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        <figure className="hidden md:block">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        <figure className="hidden md:block">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        
      </div>
      <article>
      <h1 className=" text-3xl md:text-4xl mb-4 text-center md:text-left">Ceinture FLeurie</h1>
      <p className="mb-10">123 €</p>
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
    <p>
    Duis at consectetur lorem donec massa sapien faucibus et. Sed libero enim sed faucibus turpis. 
    Donec ac odio tempor orci dapibus ultrices in iaculis. Feugiat nisl pretium fusce id velit ut tortor pretium. 
    Nibh tortor id aliquet lectus proin nibh nisl. Parturient montes nascetur ridiculus mus mauris vitae ultricies. 
    Tellus cras adipiscing enim eu turpis egestas. Imperdiet nulla malesuada pellentesque elit eget. Quis commodo odio aenean sed. 
    Enim sit amet venenatis urna cursus eget nunc. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. 
    Massa placerat duis ultricies lacus sed turpis tincidunt id.
    </p>
</section>
  </Layout>
)

export default article
