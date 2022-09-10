import React, { useEffect } from 'react'
import AppNavigator from './AppNavigator'
import { Box } from '@material-ui/core'
import axios from 'axios'
import { POKEMON_API_URL } from '../config'

export default function Pokedex() {
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=200")
    .then((response) => {
      const { results } = response.data
      let newPokemonData = []
      results.foreach((pokemon, index) => {
        let newPokemonObject = {
          id: index, 
          url: 
        }
      })
    })
  }, [])

  return (
    <div>
        <AppNavigator />

        {/* <Box>

        </Box> */}
    </div>
  )
}
