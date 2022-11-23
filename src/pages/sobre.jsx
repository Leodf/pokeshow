import React from 'react'
import Image from 'next/image'
import styles from '../styles/Sobre.module.css'

const sobre = () => {
  return (
    <div className={styles.sobre}>
        <h1>Sobre o projeto</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tenetur debitis dignissimos labore voluptates veritatis numquam adipisci nisi ratione beatae eveniet accusantium dolores, architecto amet, fugit id quaerat nobis iste?</p>
        <Image src="/images/charizard.png" width="300" height="300" alt='Charizard' />
    </div>
    
  )
}

export default sobre