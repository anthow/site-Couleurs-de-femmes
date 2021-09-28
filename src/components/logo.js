import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


export default function Logo() {
  return       <header>
  <StaticImage src="../images/header-accueil-couleursdefemmes.png" className="hidden md:block" layout="fullWidth" aspectRatio={3/1} transformOptions="cropFocus" alt="Header image de la page d'acceuil du site couleurs de femmes" />  
  <StaticImage src="../images/header-accueil-couleursdefemmes.png" className=" md:hidden" layout="fullWidth" aspectRatio={5/4} transformOptions="cropFocus" alt="Header image de la page d'acceuil du site couleurs de femmes" />  
  
    </header>
  
}
