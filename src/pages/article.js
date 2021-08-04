import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Boutique = () => (
    
  <Layout>
          <Seo title="Boutique" />

        <section className="w-8/12 m-auto mb-20 flex flex-col  justify-center  ">
<div className="flex flex-col md:flex-row    space-x-40 ">
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
      <figure className="">
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
      <figure className="">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        <figure className="">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={100}
          height={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
          className="rounded-lg mb-2"
        />
      </figure>        <figure className="">
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
      <h1 className="text-4xl mb-4">Ceinture FLeurie</h1>
      <p className="mb-10">123 €</p>
<div className="md:flex md:flex-row mb-4 space-x-2 content-center">
    <p> Tissus uni </p>
    <select className="px-2 border rounded">
    <option value="blanc">blanc</option>
    <option value="blanc">rouge</option>
    <option value="blanc">noir</option>

    </select>
     </div>
     <div className="md:flex md:flex-row space-x-2 mb-10">
    <p> Quantité </p>
    <input type="number" className="border rounded px-2 w-1/3 content-center " placeholder="1"></input>
     </div>
     <div className="md:flex md:flex-row space-x-2">
        <button className="or p-2 rounded text-bold"> ajouter au panier</button>
        <button className="or p-2 rounded text-bold"> me contacter</button>
</div>
      </article>
    </div>

</section>
<section className="w-8/12 border p-12 m-auto ">
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

export default Boutique
