import React from 'react'
import { floatimg4 } from '../assets'

const SimpleFloat = () => {
    return (
      <div className="flex justify-center items-center mb-32">
          <div className='simple-float flex justify-center items-center float-content gap-4'>
              <img src={floatimg4} alt="image" className='w-1/3' />
              <div className="float-bullet-content flex flex-col gap-8">
                  <h5 className='text-red-500'>M. Igneza Marius IHOU WATEBA</h5>
                  <p>M. Igneza Marius IHOU WATEBA, diplômé d'une prestigieuse école de commerce, dirige Woreber Lord, une maison de mode de renommée. Alors qu'il était encore étudiant, il a lancé sa marque de vêtements sur mesures à partir de 2013 à lomé au Togo , regorgeant de modèles classiques, et s'est aventuré dans le monde des affaires. Dès son plus jeune âge, il façonnait ses propres modèles sans aide, possédait une compréhension claire de sa vocation et une ambition inébranlable pour l'industrie de la mode. Son ouverture d'esprit, son esprit créatif et sa recherche incessante d'idées novatrices l'ont propulsée vers l'avant. Sa détermination inébranlable était contagieuse, infectant les autres avec la même passion pour la mode et la créativité. Avant même de terminer sa formation, il fabriquait déjà des pièces sur mesure pour son cercle d'amis, en contournant les étapes traditionnelles du processus. Après l’obtention de ses diplômes, il a renforcé son entreprise en assemblant des tailleurs et des modélistes qualifiés pour répondre à sa ligne de vêtements sur mesure. Au fil du temps, il a recruté de nouveaux talents pour diriger la gestion et l'expansion de son label, se diversifiant pour répondre à une clientèle plus étendue dans les pays voisins.</p>
              </div>
          </div>
      </div>
    )
  }

export default SimpleFloat