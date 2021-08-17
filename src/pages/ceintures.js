import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique" 
import HeaderProvi from "../components/header-provi"

const ListeCeinture = () => (

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
    <section className="w-10/12 m-auto flex flex-col justify-center ">
      <div className=" w-9/12 m-auto flex flex-col md:flex-row  mt-20 mb-32">
        <figure className="w-1/3">
          <StaticImage
            src="https://via.placeholder.com/400"
            width={250}
            height={250}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="non"
            className=""
          />        </figure>

        <article className=" w-2/3">
          <h1 className="mb-5 text-4xl"> la ceinture</h1>
          <p className="text-sm mb-5" > Sapien eget mi proin sed libero enim sed. Gravida neque convallis a cras. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.
            Consectetur lorem donec massa sapien faucibus et molestie ac. Mollis aliquam ut porttitor leo. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
            Aenean sed adipiscing diam donec. Adipiscing elit ut aliquam purus sit amet.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Gravida cum sociis natoque penatibus.</p>
          <button className="or font-bold text-sm p-2 rounded">
            <Link to="#">En savoir plus sur la ceinture</Link>
          </button>

        </article>
      </div>
      <h1 className=" titre text-4xl mb-20"> Les ceintures</h1>

      <div className=" w-12/12 flex flex-col md:grid md:grid-cols-4 m-auto md:gap-y-10 md:gap-x-32 ">
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>

        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>
        <article>
          <figure className="">
            <StaticImage
              src="https://via.placeholder.com/400"
              width={250}
              height={250}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="non"
              className="rounded-lg mb-2"
            />
          </figure>
          <h2 className="text-lg text-center mb-1">Ceinture Brianna</h2>
          <p className="text-sm text-center text-gray-600"> 30 €</p>
        </article>



      </div>
    </section>
  </Layout>
)

export default ListeCeinture
