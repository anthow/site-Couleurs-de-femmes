import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contactform from "../components/contactform"

const Contact = () => (

    <Layout>
        <Seo title="contact" />

<Contactform />

    </Layout>
)

export default Contact
