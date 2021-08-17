import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoTutoriel from "../components/logo_tutoriel"
import HeaderProvi from "../components/header-provi"

const TutoCeinture = () => (

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
                <StaticImage
                    src="https://via.placeholder.com/400"
                    width={400}
                    height={400}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="non"
                    className=""
                />        </figure>

            <article className=" ">
                <h1 className="mb-5 text-4xl"> la ceinture</h1>
                <p className="text-sm mb-5" > Sapien eget mi proin sed libero enim sed. Gravida neque convallis a cras. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Consectetur lorem donec massa sapien faucibus et molestie ac. Mollis aliquam ut porttitor leo. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
                    Aenean sed adipiscing diam donec. Adipiscing elit ut aliquam purus sit amet.
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Gravida cum sociis natoque penatibus.</p>
           
            </article>
            <article className="col-span-2 text-sm mt-5">
                <p>Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                    In iaculis nunc sed augue lacus viverra vitae congue eu. Fringilla ut morbi tincidunt augue interdum velit euismod. Fermentum leo vel orci porta non pulvinar neque.
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Leo duis ut diam quam nulla. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                    Morbi leo urna molestie at elementum eu facilisis sed odio. Vel facilisis volutpat est velit.
                </p>
                <p>Mattis aliquam faucibus purus in massa. Tristique sollicitudin nibh sit amet commodo nulla.
                    Dolor sit amet consectetur adipiscing. Arcu non sodales neque sodales ut etiam sit amet nisl.
                    Est placerat in egestas erat. Nulla posuere sollicitudin aliquam ultrices.
                    Ac tincidunt vitae semper quis lectus nulla. Quis hendrerit dolor magna eget est lorem.
                    Pellentesque elit ullamdcorper dignissim cras tincidunt lobortis feugiat vivamus.
                    Porta non pulvinar neque laoreet suspendisse interdum. Consectetur adipiscing elit ut aliquam purus sit.
                    Posuere sollicitudin aliquam ultrices sagittis orci a. Varius vel pharetra vel turpis. Tortor aliquam nulla facilisi cras.
                    Cursus euismod quis viverra nibh. Eu non diam phasellus vestibulum lorem. Aliquam nulla facilisi cras fermentum odio.
                    Tincidunt nunc pulvinar sapien et. Eget nunc scelerisque viverra mauris in aliquam. In est ante in nibh mauris cursus.
                </p>
                <p>
                Semper risus in hendrerit gravida rutrum quisque non tellus. 
                Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Id porta nibh venenatis cras sed felis eget. Duis convallis convallis tellus id interdum. 
                Tristique senectus et netus et malesuada fames ac turpis egestas. Ut tortor pretium viverra suspendisse potenti. 
                Quam nulla porttitor massa id. Aenean vel elit scelerisque mauris pellentesque. At varius vel pharetra vel turpis nunc eget lorem. 
                Nisl nisi scelerisque eu ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. 
                Et netus et malesuada fames ac turpis egestas sed. Nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                Donec ac odio tempor orci dapibus ultrices in iaculis nunc.
                </p>
            </article>
        </section>
        <section className="w-8/12 m-auto mt-20">
        <h1 className="mb-5 text-4xl mb-10"> Tutoriel</h1>
<div className=" flex flex-col md: grid md:grid-cols-2 md:gap-y-20 md:gap-x-20" >
<figure className="">
                <StaticImage
                    src="https://via.placeholder.com/400"
                    width={4000}
                    height={4000}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="non"
                    className=""
                />        </figure>
            <article>
                <h2 className=" text-2xl mb-5"> Etape 1</h2>
                <p className="text-sm">Semper risus in hendrerit gravida rutrum quisque non tellus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Id porta nibh venenatis cras sed felis eget. Duis convallis convallis tellus id interdum. Tristique senectus et netus et malesuada fames ac turpis egestas. 
                Ut tortor pretium viverra suspendisse potenti. Quam nulla porttitor massa id. Aenean vel elit scelerisque mauris pellentesque. At varius vel pharetra vel turpis nunc eget lorem. 
                Nisl nisi scelerisque eu ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Et netus et malesuada fames ac turpis egestas sed.
                 Nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                Donec ac odio tempor orci dapibus ultrices in iaculis nunc</p>
            </article>


         
            <article>
                <h2 className=" text-2xl mb-5"> Etape 2</h2>
                <p className="text-sm">Semper risus in hendrerit gravida rutrum quisque non tellus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Id porta nibh venenatis cras sed felis eget. Duis convallis convallis tellus id interdum. Tristique senectus et netus et malesuada fames ac turpis egestas. 
                Ut tortor pretium viverra suspendisse potenti. Quam nulla porttitor massa id. Aenean vel elit scelerisque mauris pellentesque. At varius vel pharetra vel turpis nunc eget lorem. 
                Nisl nisi scelerisque eu ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Et netus et malesuada fames ac turpis egestas sed.
                 Nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                Donec ac odio tempor orci dapibus ultrices in iaculis nunc</p>
            </article>

            <figure className="">
                <StaticImage
                    src="https://via.placeholder.com/400"
                    width={4000}
                    height={4000}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="non"
                    className=""
                />        </figure>

<figure className="">
                <StaticImage
                    src="https://via.placeholder.com/400"
                    width={4000}
                    height={4000}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="non"
                    className=""
                />        </figure>
            <article>
                <h2 className=" text-2xl mb-5"> Etape 3</h2>
                <p className="text-sm">Semper risus in hendrerit gravida rutrum quisque non tellus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Id porta nibh venenatis cras sed felis eget. Duis convallis convallis tellus id interdum. Tristique senectus et netus et malesuada fames ac turpis egestas. 
                Ut tortor pretium viverra suspendisse potenti. Quam nulla porttitor massa id. Aenean vel elit scelerisque mauris pellentesque. At varius vel pharetra vel turpis nunc eget lorem. 
                Nisl nisi scelerisque eu ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Et netus et malesuada fames ac turpis egestas sed.
                 Nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                Donec ac odio tempor orci dapibus ultrices in iaculis nunc</p>
            </article>


</div>
            </section>

    </Layout>
)

export default TutoCeinture
