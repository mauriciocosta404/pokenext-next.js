import Link from 'next/link';
import style from './style.module.css'

const Header=()=>{
    return(
        <nav className={style.navBar}>
            <div className={style.logo}>
                <img
                    src="images/pokeball.png" 
                    width="30"
                    height="30"
                    alt="pokeball"
                    />
                <h1>PokeNext</h1>
            </div>
            <ul className={style.linkItems}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header;