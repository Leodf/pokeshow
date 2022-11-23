
import styles from '../styles/Home.module.css'

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
    <div>
      <h1>Pokeshow</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default index


