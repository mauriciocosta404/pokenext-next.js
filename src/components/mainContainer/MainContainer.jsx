import Header from "../header/Header";
import Footer from '../footer/Footer';
import Head from 'next/head';
const MainContainer=({children})=>{
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"/>
                <title>PokeNext</title>
            </Head>
            <Header/>
                <main className="mainContainer"a>{children}</main>
            <Footer/>
        </>
    )
}
export default MainContainer;