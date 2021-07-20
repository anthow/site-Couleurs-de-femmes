import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"



export default function Avis() {
  const data = useStaticQuery(graphql`
    query aviscequery {
       
        datoCmsAvi {
          auteurAvisDeux
          auteurAvisQuatre
          auteurAvisTrois
          auteurAvisUn
          texteAvisDeux
          texteAvisQuatre
          texteAvisTrois
          texteAvisUn
        }
      }
    
  `)


  return (
    <>
      <h2 className="mb-10 mt-20 font-bold text-xl text-center">C'est vous qui en parlez le mieux</h2>

      <section className=" w-10/12 md:w-8/12 m-auto  grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 auto-cols-max auto-rows-max gap-y-20 gap-x-28 content-center">
        <article className="border p-10">
          <h3 className="text-center mb-10 font-bold text-lg">
            {data.datoCmsAvi.auteurAvisUn}    </h3>
          <p className="text-center text-sm">
          {data.datoCmsAvi.texteAvisUn}
            
            </p>
        </article>
        <article className="border p-10">
          <h3 className="text-center mb-10 font-bold text-lg">
          {data.datoCmsAvi.auteurAvisDeux}
          </h3>
          <p className="text-center text-sm">
          {data.datoCmsAvi.texteAvisDeux}
</p>
        </article>
        <article className="border p-10">
          <h3 className="text-center mb-10 font-bold text-lg">
          {data.datoCmsAvi.auteurAvisTrois}          </h3>
          <p className="text-center text-sm">
          {data.datoCmsAvi.texteAvisTrois}
</p>
        </article>
        <article className="border p-10">
          <h3 className="text-center mb-10 font-bold text-lg">
          {data.datoCmsAvi.auteurAvisQuatre}          </h3>
          <p className="text-center text-sm">
          {data.datoCmsAvi.texteAvisQuatre }
</p>
        </article>
      </section>
    </>

  )
}
