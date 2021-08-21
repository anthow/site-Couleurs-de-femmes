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
            <header className=" w-12/12 mb-32 ">

                <figure>
                    <LogoTutoriel />
                </figure>
                <HeaderProvi />
            </header>

        </section>
        <section className="w-8/12  m-auto flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-2  ">
            <figure className="">
                <GatsbyImage image={data.datoCmsTutoriel.imageVideoCeinture.gatsbyImageData} />

            </figure>

            <article className=" ">
                <h1 className="mb-5 text-4xl"> la ceinture</h1>

                <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.texteIntroduction }}>
                </div>
            </article>
            <article className="col-span-2 text-sm mt-5" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.prSentationCeinture }}>

            </article>
        </section>
        <section className="w-8/12 m-auto mt-20">
            <h1 className="mb-5 text-4xl mb-10"> Tutoriel</h1>
            <div className=" flex flex-col md: grid md:grid-cols-2 md:gap-y-20 md:gap-x-20" >
                <figure className="">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape1.gatsbyImageData} />
                </figure>
                <article>
                    <h2 className=" text-2xl mb-5"> Etape 1</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape1 }} />
                </article>



                <article>
                    <h2 className=" text-2xl mb-5"> Etape 2</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape2 }} />

                </article>

                <figure className="">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape2.gatsbyImageData} />

                </figure>

                <figure className="">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape3.gatsbyImageData} />
                </figure>
                <article>
                    <h2 className=" text-2xl mb-5"> Etape 3</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape3 }} />

                </article>


            </div>
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
        gatsbyImageData
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
