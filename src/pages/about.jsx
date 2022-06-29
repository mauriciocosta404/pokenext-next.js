import style from '../../styles/about.module.css';

const About =()=>{
    return(
        <>
            <h1 className={style.title}>About the project</h1>
            <div className={style.container}>
                <div className={style.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam impedit vitae excepturi! Ipsam hic, consectetur,
                    velit molestiae, atque id quo earum sint illo 
                    alias quam voluptatibus adipisci ab incidunt eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam impedit vitae excepturi! Ipsam hic, consectetur,
                    velit molestiae, atque id quo earum sint illo 
                    alias quam voluptatibus adipisci ab incidunt eos.</p>
                    <button>learn more</button>
                </div>
                    <img src="./images/charizard.png" width="300" height="300" alt="charizard" />
            </div>
        </>
    )
}
export default About;