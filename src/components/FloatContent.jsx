import React from 'react'
import { floatimg1 } from '../assets';

const FloatContent = () => {
  return (
    <div className=' flex justify-center items-center my-32'>
        <div className="float-content flex justify-center items-center gap-8">
          <img src={floatimg1} alt="image" className="w-1/3" />
          <div className="float-right flex flex-col gap-10">
            <h2 className='h3'>Pourquoi vous choisir ?</h2>
            <p className='medium'>Toutes nos pièces sont soigneusement assemblées dans les ateliers de confection de nos partenaires professionnels. Nos vêtements n'auraient aucun sens s'ils n'étaient pas faits pour durer. Nous valorisons non seulement la matière, mais tout le travail humain derrière la fabrication du vêtement.</p>
          </div>
        </div>
    </div>
  )
}

export default FloatContent;