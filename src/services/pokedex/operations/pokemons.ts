import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
query GET_POKEMONS($limit: Int!, $offset: Int!, $order_by: [pokemon_v2_pokemonspecies_order_by!]) {
  pokemons: pokemon_v2_pokemonspecies(order_by: $order_by, limit: $limit, offset: $offset) {
    id
    name
    pokemon_details: pokemon_v2_pokemons(distinct_on: pokemon_species_id) {
      types: pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
}
`

export const GET_POKEMONS_BY_GEN = gql`
query GET_POKEMONS($limit: Int!, $offset: Int!, $order_by: [pokemon_v2_pokemonspecies_order_by!], $generation_id: Int!) {
  pokemons: pokemon_v2_pokemonspecies(order_by: $order_by, limit: $limit, offset: $offset, where: {generation_id: {_eq: $generation_id}}) {
    id
    name
    pokemon_details: pokemon_v2_pokemons (distinct_on: pokemon_species_id) {
      types: pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
}
`

export const GET_POKEMONS_BY_TYPE = gql`
query GET_POKEMONS($limit: Int!, $offset: Int!, $order_by: [pokemon_v2_pokemonspecies_order_by!], $type_id: Int!) {
  pokemons: pokemon_v2_pokemonspecies(order_by: $order_by, limit: $limit, offset: $offset, where: {pokemon_v2_pokemons: {pokemon_v2_pokemontypes: {type_id: {_eq: $type_id}}}}) {
    id
    name
    pokemon_details: pokemon_v2_pokemons (distinct_on: pokemon_species_id) {
      types: pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
}
`

export const GET_POKEMONS_REGEX = gql`
query GET_POKEMONS($limit: Int!, $offset: Int!, $order_by: [pokemon_v2_pokemonspecies_order_by!], $name_regex: String! = "") {
  pokemons: pokemon_v2_pokemonspecies(order_by: $order_by, limit: $limit, offset: $offset, where: {name: {_iregex: $name_regex}}) {
    id
    name
    pokemon_details: pokemon_v2_pokemons(distinct_on: pokemon_species_id) {
      types: pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
}
`
