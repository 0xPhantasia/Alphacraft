import '../styles/Banner.css';
import logo from '../styles/Alpha_Transparent.png';

const CategoriesList = [
    'Contact',
    'Creer un serveur',
    'Gerer mon serveur'
];

console.log(logo);

function Banner(){
    return (
        <div className='alp-banner'>
            <ul className="alp-categories">
                <img className='alp-logo' src={logo} alt='Logo' />
                {CategoriesList.map((Category) => (
                    <li key={Category} className="alp-category"> {/*Key de la honte*/}
                        <h2>{Category}</h2>  
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default Banner