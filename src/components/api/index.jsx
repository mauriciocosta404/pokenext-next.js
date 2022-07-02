export async function getStaticProps(){
    const maxPokemonNumber=50;
    const api='https://pokeapi.co/api/v2/pokemon/';
  
    const res=await fetch(`${api}/?limit=${maxPokemonNumber}`)
    const data=await res.json();
  
  
    return{
        props:{
            pokemons:data.results,
        },
    }
  }
  