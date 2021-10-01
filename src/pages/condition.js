import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
const condition = ({ data })  => (

  <Layout>
    <Seo title="condition générale de vente" />
    <HeaderProvi />

    <section className="w-10/12 m-auto mt-10">
    <div className="text-sm m-auto w-10/12 md:12/12 mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsConditionsEtCharte.condition }} />
  
</section>
  </Layout>
)

export const query = graphql`
  {
    datoCmsConditionsEtCharte {
      charte
      condition
    }
  }
`


export default condition
