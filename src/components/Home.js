import Banner from './Banner.js';
import '../styles/Home.css'
import main_logo from '../styles/Main_Logo.png'

function Home(){
    return(
        <div>
            <div>
                <Banner />
            </div>
            <div className='center'>
                <img id='main-logo' src={main_logo} alt='Main Logo'></img>
                <h1 id='gradient-text'>Bienvenue sur Alphacraft.</h1>
                <h3>Le service d'hébergement de serveur Minecraft simple et gratuit.</h3>
            </div>
        </div>
    )
}

export default Home