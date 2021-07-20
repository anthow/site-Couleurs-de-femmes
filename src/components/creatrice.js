import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {  useStaticQuery, graphql } from "gatsby"

export default function Logo() {
  const data = useStaticQuery(graphql`
    query creatricequery {
      datoCmsPageDAccueil {
        
        titreQuiSuisJe
        texteQuiSuisJe
        }
      }
    
  `)
    
return ( 
<>
<h2 className="mb-10 mt-20 font-bold text-xl text-center">Qui suis-je ?</h2>
    <section className="py-20 w-10/12 m-auto grid grid-cols-1 grod-rows-2  md:grid-cols-2 md:grid-rows-1 auto-cols-max auto-rows-max gap-y-20 gap-x-28 content-center">
      <article>
        <h3 className="font-bold text-lg"> Fanny</h3>
        <figure className="place-self-center "
        >          <StaticImage
            src="https://via.placeholder.com/400"
            width={400}
            height={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            className="rounded-full"



          />
        </figure>
      </article>
      <article>

        <h3 className=" mb-10 md:mb-20 font-bold text-lg" >  {data.datoCmsPageDAccueil.titreQuiSuisJe} </h3>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteQuiSuisJe  }}>
</div>
      </article>
    </section>
        </>

    )
}
    