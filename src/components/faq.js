import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"



export default function Faq() {
  const data = useStaticQuery(graphql`
  query faqquery
   {
    allDatoCmsFaq(limit: 4) {
      edges {
        node {
          question
          reponse
          }
        }
      }
    }
  `)



return ( 
<>
    
<div className=" w-12/12  faq mt-20">
      <h2 className=" w-10/12  m-auto pt-10 text-center text-3xl md:text-4xl font-bold  "> Foire aux questions </h2>
        <section className=" mt-10 md:mt-0 md:py-20 w-10/12 md:w-8/12 m-auto grid grid-cols-1 grid-rows-4  md:grid-cols-2 md:grid-rows-2 auto-cols-max auto-rows-max gap-y-10 md:gap-y-20 md:gap-x-28 content-center">
        {data.allDatoCmsFaq.edges.map(({ node }, i) => (
            <article className="faq">
            <h3 className=" mb-5 font-bold text-xl">
            {node.question} </h3>
              <p className="text-sm italic"> {node.reponse}</p>
            </article>
         ))}
        
      
        </section>
        <section className="w-10/12 m-auto">

        <button className=" text-white faq px-5 py-2 m-auto  rounded mb-10">  
          <a href="https://www.facebook.com/couleursdefemme/" target="_blank" rel="noreferrer"> Page Facebook</a>
        </button>

        <button className="text-white faq px-5 py-2 ml-10 m-auto rounded mb-10"> 
        <Link to="/faq">FAQ</Link> 
        </button>
        </section>
        
      </div>
        </>

    )

}