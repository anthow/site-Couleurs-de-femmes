import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Avis from "../components/avis"
import Faq from "../components/faq"
import Creatrice from "../components/creatrice"
import Horaire from "../components/horaire"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Contactform from "../components/contactform"
import { GatsbyImage } from "gatsby-plugin-image"
import HeaderProvi from "../components/header-provi"
import Logo from "../components/logo"

const IndexPage = ({ data }) =>(
  <Layout>
    <Seo title="Home" />
    <section className="w-12/12">
    <div className=" w-12/12 mb-4  ">

    <figure className="hidden md:block">
         <Logo className="hidden md:block" />
        </figure>
        <header>
        <HeaderProvi />
        </header>
        <figure className=" mt-12 md:hidden">
         <Logo className="md:hidden" />
        </figure>
</div>
      <h1 className=" w-10/12 md:w-8/12 m-auto italic text-center text-3xl mt-10 mb-10 md:mb-24 " dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.titrePage }} >
        </h1>
    </section>
  
    <section className=" w-10/12 md:w-8/12 m-auto  auto-cols-min  md:gap-y-20 md:gap-x-20 flex flex-col md:grid md:grid-rows-4 md:grid-cols-2 ">
      <GatsbyImage className=" order-1" image={data.datoCmsPageDAccueil.imageDeuxAccouchements.gatsbyImageData} />

      <article className="text-sm order-2 mb-20">  

        <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-8 font-bold text-lg">{data.datoCmsPageDAccueil.titreDeuxAccouchements} </h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteDeuxAccouchements }}>
          
        </div>
      </article>

      <GatsbyImage className=" order-3 md:order-4 " image={data.datoCmsPageDAccueil.deuxiemeImageAccueil.gatsbyImageData} />

      <article className="text-sm order-4 mb-20 md:order-3">

      <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-8 font-bold text-lg">{data.datoCmsPageDAccueil.titreTextileEco} </h2>
      <div className="mb-16" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteChoixValeurs }}>
</div>  
      <h2 className=" mt-10 md:mt-0  text-center md:text-left  mb-8 font-bold text-lg">{data.datoCmsPageDAccueil.titreChoixValeurs} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteTextileEco }}>
</div>
      </article>

      <GatsbyImage className="order-5 " image={data.datoCmsPageDAccueil.imagePartenaireDeConfiance.gatsbyImageData} />

      <article className=" mb-20 text-sm order-6">

      <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-8 font-bold text-lg ">{data.datoCmsPageDAccueil.titrePartenaireDeConfiance} </h2>
      <div  dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.textePartenaireDeConfiance }}>
</div>
      </article>

      <GatsbyImage className=" order-7 md:order-8 " image={data.datoCmsPageDAccueil.imageDeuxPartenaireDeConfiance.gatsbyImageData} />

      <article className=" order-8 mt-10 md:mt-0 text-sm md:order-7">

      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteDeuxPartenaireDeConfiance }}>
</div>
      </article>



    </section>

    
  


    <section className=" mt-10 md:mt-20 w-12/12 m-auto">
      <figure className="place-self-center  "
      >    <GatsbyImage image={data.datoCmsPageDAccueil.imageCeinture.gatsbyImageData} />


      </figure>
    </section>
    <section className=" mt-10 w-10/12 md:w-8/12 m-auto ">
    <h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-8 font-bold text-lg">{data.datoCmsPageDAccueil.titreConstat} </h2>
      <article className="text-sm">
        
      <div className="mb-16" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteConstat  }}>
</div>
<h2 className=" mt-10 md:mt-0 text-center md:text-left  mb-8 font-bold text-lg">{data.datoCmsPageDAccueil.titreToutesLesFemmes} </h2>
<div className="mb-20 md:mb-16" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteToutesLesFemmes  }}>
</div>
      </article>
    </section>
    <Avis />
    <Faq />
    <Creatrice />
    <Horaire />
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
    imageDeuxAccouchements {
      gatsbyImageData (width:1200
        height: 600)
    }
    deuxiemeImageAccueil {
      gatsbyImageData(width:1200
        height:1500)
    }
    
    imagePartenaireDeConfiance {
      gatsbyImageData(width:1200
        height:1500)
    }
    
    imageDeuxPartenaireDeConfiance {
      gatsbyImageData(width:1200
        height:1500)
    }
    
    imageCeinture {
      gatsbyImageData(width: 3000
        height:1000
        )
    }
  }
}
`


export default IndexPage



