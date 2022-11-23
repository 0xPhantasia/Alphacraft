import '../styles/Banner.css';
import logo from '../styles/Alpha_Transparent.png';

const CategoriesList = [
    'Contact',
    'Creer un serveur',
    'Gerer mon serveur'
];

console.log(logo);

function handleClick(e){
    console.log(e)
}

function Banner(){
    return (
        <div className='alp-banner'>
            <ul className="alp-categories">
                <img className='alp-logo' src={logo} alt='Logo' onClick={() => handleClick('Home')}/>
                <div className='toast'>
                    {CategoriesList.map((Category) => (
                        <li key={Category}> {/*Key de la honte*/}
                            <h2 className='alp-category' onClick={() => handleClick(Category)}>{Category}</h2>  
                        </li>
                    ))}
                </div>
                <button className='font alp-loginButton' onClick={() => handleClick('Login')}>Se connecter</button>
            </ul>
        </div>
        
    );
}

export default Banner