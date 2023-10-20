import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
query GET_POKEMONS($limit: Int!, $offset: Int!) {
  pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
    id
    name
    order
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
`