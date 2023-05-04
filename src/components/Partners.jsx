import React from 'react'
import { woreberBlack } from '../assets'

const Partners = () => {
  return (
    <div className='   mb-34 flex flex-col justify-center w-full items-center mb-24'>
        <div className="float-content">
            <div className="top flex flex-col justify-center items-center gap-8">
                <h3>Les Partenaires</h3>
                <p className='text-center'>Woreber lord construit des partenariats en mettant en relation des acteurs privés et publics de différents écosystèmes susceptibles d'accompagner de jeunes marques émergentes :</p>
            </div>
            <div className="partners grid gap-8 -center grid-cols-7 my-16">
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
                <img src={woreberBlack} alt="partnerLogo" />
            </div>
        </div>
    </div>
  )
}

export default Partners