import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Card from '../../src/components/card/card';
export {getStaticProps} from '../components/api/index';



export default function Home({pokemons}) {
  return (
  <>
      <section className={styles.home} id="home">

        <div className={styles.slider}>
            <div className={styles.wrapper}>

                <div class={styles.slide}>
                    <div className={styles.content}>
                        <span>our special dishes</span>
                        <h3>spicy noodles</h3>
                        <p>Lorem ipsum dolor sit. Officia a nostrum aut excepturi quae dignissimos voluptas, quidem distinctio, magni veritatis voluptatem quos 
                            recusandae aperiam iure explicabo tempora ipsam eos temporibus.</p>
                            <a href="#" className={styles.btn}>order now</a>
                    </div>
                    <div class="image">
                        <img src="images/charizard.png" alt="" width="400"/>
                    </div>
                </div>
              </div>
              </div>
            </section>  
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <img src="/images/pokeball.png" alt="Pokeball" width="50" height="50" />
      </div>
      <div className={styles.pokemonContainer}>
      {
          pokemons.map(
            (pokemon,index)=>(
            <Card key={index}
                  index={index}
              pokemon={pokemon}
            />))
        }
      </div>
    </>
  )
}
