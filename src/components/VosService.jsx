import React from 'react'
import { floatimg5 } from '../assets'

const VosService = () => {
    return (
      <div className="flex justify-center items-center mb-32">
          <div className='flex justify-center items-center float-content gap-8'>
              <img src={floatimg5} alt="image" className='w-1/3' />
              <div className="float-bullet-content flex flex-col gap-8">
                  <h3>Vos services: </h3>
                  <p>A l'avant-garde de la marque, se trouve le cœur de son métier et l'activité principale, le meilleur moyen de diffuser le prêt-à-porter africain auprès des masses. Les vêtements sur mesure, quintessence de l'élégance et du style vestimentaires, sont des vêtements sur mesure conçus pour correspondre aux mensurations et aux préférences uniques de celui qui les porte. Des costumes pour hommes classiques aux robes de mariée exquises, les vêtements sur mesure sont la marque d'une qualité, d'une durabilité et d'un talent exceptionnels. Que vous vous habilliez pour une réunion d'affaires ou une occasion formelle, une tenue sur mesure peut améliorer votre apparence et laisser une impression durable sur ceux qui vous entourent. Notre service propose un produit sur mesure, adapté à la morphologie, aux préférences et aux spécifications uniques de chaque client. Nous affectons un gestionnaire de compte dédié à chaque client pour une expérience vraiment personnalisée</p>
              </div>
          </div>
      </div>
    )
  }

export default VosService