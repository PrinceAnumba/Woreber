import React from 'react'
import { floatimg2 } from '../assets'

const FloatBullet = () => {
  return (
    <div className="flex justify-center items-center my-32">
        <div className='bullet-mb flex justify-center items-center float-content gap-4'>
          <div className="float-bullet-content flex flex-col gap-8">
            <h5 className='text-red-500'>VOTRE EXPERTISE</h5>
            <h3>Les relations avec la clientèle jouent un rôle central dans la promotion de la fidélité à la marque, en particulier dans les secteurs où la concurrence est féroce.</h3>
            <p>L'époque du marketing général est révolue ; les clients modernes recherchent des expériences personnalisées qui les font se sentir spéciaux et valorisés.</p>
            <ul className='list-disc'>
                <li className='text-red-500'> <div className='text-black'>Établir une relation égale et mutuellement bénéfique avec les marques et les détaillants est ce que les clients souhaitent le plus. Outre les plateformes de médias sociaux et les canaux de communication traditionnels, la messagerie instantanée fait également partie intégrante de notre stratégie.</div> </li>
                <li className='text-red-500'>   <div className='text-black'> Notre équipe s'efforce d'établir un système de service client efficace et interactif qui combine notre expertise avec des informations précieuses sur les clients, résultant en une expérience utilisateur complète et personnalisée.</div></li>
            </ul>
          </div>
          <img src={floatimg2} alt="image" className='w-1/3' />
        </div>
    </div>
  )
}

export default FloatBullet