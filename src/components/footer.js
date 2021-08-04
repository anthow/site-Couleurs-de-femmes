import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Contactform from "./contactform"


export default function Footer() {
  const data = useStaticQuery(graphql`
    query contactquery {
      datoCmsContact {
        adresse
        adresseMail
        facebook
        instagram
        pays
        ville
        numeroDeTelephone
      }
        }
     
    
  `)


return ( 
    <footer>
        
        
        
                <section className="py-20 w-10/12 flex flex-col  md:w-8/12 m-auto md:grid md:grid-cols-3 md:grid-rows-1 auto-cols-max auto-rows-max gap-y-12 md:gap-y-20 gap-x-28 content-center">
<article className="flex">
<figure className="mr-10"
      >          <StaticImage
          src="https://via.placeholder.com/40"
          width={40}
          height={40}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className="rounded-full"



        />
      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Adresse</h3>
    <p className="text-sm">{data.datoCmsContact.adresse} <br></br>
    {data.datoCmsContact.ville}</p>
</div>
</article>

<article className="flex">
<figure className="mr-10 "
      >          <StaticImage
          src="https://via.placeholder.com/40"
          width={40}
          height={40}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className="rounded-full"



        />
      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Email</h3>
    <p className="text-sm"> {data.datoCmsContact.adresseMail} </p>
    <div className="flex flex-row">
<a target="_blank" rel="noreferrer" href={data.datoCmsContact.facebook} > 
    <figure className=" mr-2">          <StaticImage
          src="https://via.placeholder.com/40"
          width={30}  
          height={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className="rounded-full"



        />

      </figure>
      </a>

      <a target="_blank" rel="noreferrer" href={data.datoCmsContact.instagram} > 

      <figure className=" "
      >          <StaticImage
          src="https://via.placeholder.com/40"
          width={30}
          height={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className="rounded-full"



        />
      </figure>
      </a>
    </div>
</div>
</article>
<article className="flex">
<figure className="mr-10"
      >          <StaticImage
          src="https://via.placeholder.com/40"
          width={40}
          height={40}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className="rounded-full"



        />
      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Téléphone</h3>
    <p className="text-sm">{data.datoCmsContact.numeroDeTelephone}</p>
</div>
</article>
        </section>
        <section className="w-8/12 m-auto">
        <figure className="mb-10 "
      >          <StaticImage
          src="https://via.placeholder.com/730x195"
          width={365}
          height={97}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          



        />
      </figure>
      <p className=" text-sm text-center">Copyright</p>
        </section>
    </footer>
)
}

