import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contactform from "../components/contactform"
import HeaderProvi from "../components/header-provi"
import LogoContact from "../components/logo_contact"
import Horraire from "../components/horraire"
const Contact = () => (

    <Layout>
        
        <Seo title="contact" />
        <section className="w-12/12">
    <header className=" w-12/12 mb-32 ">

    <figure>
         <LogoContact />
        </figure>
        <HeaderProvi />
</header>
     
    </section>
    <Horraire />
<Contactform />

    </Layout>
)

export default Contact
