import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoTutoriel from "../components/logo_tutoriel"
import HeaderProvi from "../components/header-provi"
import { GatsbyImage } from "gatsby-plugin-image"


const TutoCeinture = ({ data }) => (

    <Layout>
        <Seo title="la ceinture" />
        <section className="w-12/12">
            <header className=" w-12/12 mb-10 md:mb-32 ">

                <figure>
                    <LogoTutoriel />
                </figure>
                <HeaderProvi />
            </header>

        </section>
        <section className="md:w-8/12  gap-x-12 m-auto flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1  ">
        <h1 className="md:hidden w-10/12 m-auto text-center md:w-12/12 mb-5 text-4xl"> La ceinture</h1>
            <figure className="mb-10 md:-mb-0">
                <GatsbyImage image={data.datoCmsTutoriel.imageVideoCeinture.gatsbyImageData} />

            </figure>

            <article className=" ">
                <h1 className="hidden md:block mb-5 text-4xl"> L    a ceinture</h1>

                <div className="text-sm mb-5 w-10/12 md:w-12/12 m-auto md:m-0" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.texteIntroduction }}>
                </div>
            </article>
        
        </section>
        <section className="md:w-8/12  m-auto mt-10 md:mt-20">
            <h1 className="mb-5 text-4xl mb-10 text-center md:text-left"> Comment placer la ceinture ? </h1>
            <div className=" flex flex-col md: grid md:grid-cols-2 md:gap-y-20 md:gap-x-20" >
                <figure className="order-1">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape1.gatsbyImageData} />
                </figure>
                <article className="order-2 w-10/12 mb-10 md:mb-0 md:w-12/12 m-auto">
                    <h2 className=" text-2xl mt-5 md:mt-0 mb-5"> Etape 1</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape1 }} />
                </article>



                <article className=" mt-5 md:mt-0 mb-5 md:mb-0 order-4 md:order-3 w-10/12 md:w-12/12 m-auto">
                    <h2 className=" text-2xl mb-5"> Etape 2</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape2 }} />

                </article>

                <figure className="order-3 md:order-4">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape2.gatsbyImageData} />

                </figure>

                <figure className="order-5">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape3.gatsbyImageData} />
                </figure>
                <article className="order-6 w-10/12 md:w-12/12 m-auto">
                    <h2 className=" text-2xl mt-5 md:mt-0 mb-5"> Etape 3</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape3 }} />

                </article>


            </div>
        </section>

        <section className="md:w-8/12  gap-x-12 m-auto flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1  ">
        <article className="md:mt-10 col-span-2 text-sm w-10/12 md:w-12/12 m-auto " dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.prSentationCeinture }}>

</article>
</section>
    </Layout>
)

export const query = graphql`
  {
    datoCmsTutoriel {
      texteIntroduction
      etape1
      etape2
      etape3
      imageEtape1 {
        gatsbyImageData(
            height:2400,
            width: 3000,
        )
      }
      imageEtape2 {
        gatsbyImageData
      }
      imageEtape3 {
        gatsbyImageData
      }
      imageVideoCeinture {
        gatsbyImageData
      }
      prSentationCeinture
    }
  }
`

export default TutoCeinture
