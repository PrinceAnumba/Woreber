import React from 'react'
import { floatimg3, bulb, upicon, topnotch } from '../assets'

const ServiceBreakdown = () => {
  return (
    <div className='my-32 flex justify-center items-center w-full'>
        <div className="flex flex-row w-3/4  justify-between items-center">
            <div className=" col-span-1 gap-8  w-1/2 flex flex-col justify-between h-full">
                <h3>Service Client de 
                    qualité:</h3>
                <div className="features flex gap-4">
                    <img className="service-icon " src={upicon} alt="icon" />
                    <div className="breakdown-content">
                        <p>Notre tâche principale est d'être à l'écoute très attentive de nos interlocuteurs : ces interactions avec les clients sont des opportunités permettant d'améliorer notre relation client, ainsi que la fidélisation et la satisfaction.</p>
                    </div>
                </div>
                <div className="features flex gap-4">
                    <img className="service-icon" src={topnotch} alt="icon" />
                    <div className="breakdown-content">
                        <p>Notre service client est capable d'identifier le problème de l'interlocuteur et en même temps d'apporter une réponse pertinente, apportant une valeur ajoutée au client.</p>
                    </div>
                </div>
                <div className="features flex gap-4">
                    <img className="service-icon" src={bulb} alt="icon" />
                    <div className="breakdown-content">
                        <p>Nous améliorons également les interactions de l'organisation avec les clients. Son sens de l'écoute, sa disponibilité, sa réactivité et son engagement permet d'apporter des réponses personnalisées aux questions des clients. Le service client de notre organisation contribue directement à notre image de marque et contribue également à sa performance commerciale.</p>
                    </div>
                </div>
            </div>
            <div className="image-effect relative col-span-2 ">
                <img src={floatimg3} alt="image" className=' absolute top-8 left-8'/>
            </div>
        </div>
    </div>
  )
}

export default ServiceBreakdown