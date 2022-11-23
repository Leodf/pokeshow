
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import React from 'react'

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const response = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await response.json()
  
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    }
  }
}

const index = ({ pokemons }) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>show</span></h1>
        <Image 
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt='Pokeshow'
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  )
}

export default index


