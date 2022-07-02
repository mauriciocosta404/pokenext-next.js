import Link from 'next/link'
import style from './card.module.css';

const Card=({index,pokemon})=>{
    return(
            <div className={style.box}>
                <img 
                    src={`https://cdn.traction.one/pokedex/pokemon/${index+1}.png`}
                    width="120" 
                    height="120" 
                    alt={pokemon.name}/>
                    <p>#{index}</p>
                <h3>{pokemon?.name}</h3>
                <Link  href={`/pokemon/${index}`}><a className={style.btn}>details</a></Link>
        </div>
    )
}
export default Card;