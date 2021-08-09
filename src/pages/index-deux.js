import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Avis from "../components/avis"
import Faq from "../components/faq"
import Creatrice from "../components/creatrice"
import Horraire from "../components/horraire"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Contactform from "../components/contactform"
const IndexPage = ({ data }) =>(
  <Layout>
    <Seo title="Home" />
    <section className="w-12/12">
      <h1 className=" w-10/12 md:w-8/12 m-auto italic text-center text-3xl mt-10 mb-20 " dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.titrePage }} >
        </h1>
    </section>
  
  
    <section className=" w-10/12 md:w-8/12 m-auto  gap-y-20 gap-x-20 flex flex-col md:grid md:grid-rows-4 md:grid-cols-2 mb-20 ">
      <figure className=" md:order-1">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={2000}
          height={2000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
        />
      </figure>
      <article className="text-sm md:order-2">  

        <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreDeuxAccouchements} </h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteDeuxAccouchements }}>
          
        </div>
      </article>

      <figure className="md:order-4 ">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={2000}
          height={2000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
        />
      </figure>
      <article className="text-sm md:order-3">

      <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreTextileEco} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteChoixValeurs }}>
</div>  
      <h2 className=" mt-10  text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreChoixValeurs} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteTextileEco }}>
</div>
      </article>

      <figure className="md:order-5 ">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={2000}
          height={2000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
        />
      </figure>
      <article className="text-sm md:order-6">

      <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titrePartenaireDeConfiance} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.textePartenaireDeConfiance }}>
</div>
      </article>

      <figure className=" md:order-8 ">
        <StaticImage
          src="https://via.placeholder.com/400"
          width={2000}
          height={2000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="non"
        />
      </figure>
      <article className="text-sm md:order-7">

      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteDeuxPartenaireDeConfiance }}>
</div>
      </article>



    </section>

    
  



    <section className=" w-10/12 m-auto md:w-12/12">
    <h1 className=" w-10/12 md:w-6/12 m-auto italic text-center text-3xl mt-10 mb-20 " 
    dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.titreCreation }} >
      </h1>
      <div className="mb-20 text-center" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.accrocheCreation }}>
</div>    </section>
    <section className=" w-12/12 md:w-8/12 m-auto  flex flex-col md:grid md:grid-cols-2 md:grid-rows-1   md:auto-cols-max md:auto-rows-max md:gap-y-20 mb-20 ">
      <div className="border  w-10/12  m-auto mb-10 md:mb-0 md:w-8/12 p-5">
      <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreLaCeinture} </h2>
        <article className="text-sm">

      
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteLaCeinture }}>
</div>
        </article>
      </div>
      <div>
<a href="https://www.youtube.com/watch?v=TFjhUkNGTH8" target="_blank">
      <figure className="mr-10"
      >          <StaticImage
          src="../images/youtube.jpg"
          width={1250}
          height={800}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className=""



        />  </figure> </a> 
        
        <article>
          <p> pour visionner la vidéo cliquez sur la photo</p>
        </article>
        </div>  </section>
    <section className=" mt-20 w-12/12 m-auto">
      <figure className="place-self-center rounded "
      >          <StaticImage
          src="https://via.placeholder.com/400"
          width={3000}
          height={1000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          className=""



        />
      </figure>
    </section>
    <section className=" mt-20 w-8/12 m-auto ">
    <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreConstat} </h2>
      <article className="text-sm">
        
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteConstat  }}>
</div>
<h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-10 font-bold text-lg">{data.datoCmsPageDAccueil.titreToutesLesFemmes} </h2>
<div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteToutesLesFemmes  }}>
</div>
      </article>
    </section>
    <Avis />
    <Faq />
    <Creatrice />
    <Horraire />
    <Contactform />
  </Layout>
)



export const query = graphql`
{  datoCmsLogo {
  logo {
    gatsbyImageData
  }
}
  datoCmsPageDAccueil {
    titrePage
    titreDeuxAccouchements
    texteDeuxAccouchements
    titreChoixValeurs
    texteChoixValeurs
    titreTextileEco
    texteTextileEco
    titrePartenaireDeConfiance
    textePartenaireDeConfiance
    texteDeuxPartenaireDeConfiance
    titreCreation
    accrocheCreation
    titreLaCeinture
    texteLaCeinture
    titreConstat
    texteConstat
    titreToutesLesFemmes
    texteToutesLesFemmes
    
  }
}
`


export default IndexPage



