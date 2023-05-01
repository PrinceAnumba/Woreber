import React from 'react'
import { qualitybg } from '../assets'

const QualitySection = () => {
  return (
    <div className='relative items-center flex justify-center '>
        <img src={qualitybg} alt="img" />
        <div className="quality-overlay absolute top-0 text-white flex flex-col text-center max-w-2xl h-full justify-center gap-8" >
            <h3>La qualité du personnel</h3>
            <p className='small'>Woreber Lord , dans sa quête de richesse, a incorporé les éléments de production nécessaires à cet effet, au premier rang desquels ses employés. De ce point de vue, les activités d'une entreprise, de l'administration au marketing en passant par la production, sont le travail de ses employés.</p>
        </div>
    </div>
  )
}

export default QualitySection