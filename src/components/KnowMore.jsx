import React from 'react'
import { heroimg2 } from '../assets'

const KnowMore = () => {
  return (
    <div className='know-more mb-32 flex flex-col justify-center w-full items-center'>
        <img className='w-full' src={heroimg2} alt="hero-image" />
        <div className=" mt-8 float-content more-info text-justify">L'équipe est composée à la fois d'experts internes et de consultants externes spécialisés dans l'accompagnement des jeunes marques naissantes des secteurs de la mode et du design. Leur expertise dans le domaine combine le meilleur des connaissances traditionnelles, de la créativité et du savoir-faire technique avec des solutions numériques de pointe. En conséquence, l'organisation offre un environnement stimulant aux stylistes et designers émergents pour développer leur entreprise à leur plein potentiel. Notre défi est de créer des vêtements avec un minimum d'impact sur l'environnement. Le style reconnaissable de la marque, parfois jugé trop clinquant ou déplacé, est une signature non négligeable et contribue à la réputation du nom Versace, qui est l'un des plus connus de la mode</div>
    </div>
  )
}

export default KnowMore 