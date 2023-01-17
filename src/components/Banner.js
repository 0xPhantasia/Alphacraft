import '../styles/Banner.css';
import logo from '../styles/Alpha_Transparent.png';
import { Link } from "react-router-dom"


const CategoriesList = [
    {
        name: 'Contact',
        path: '/Contact',
        id: '1'
    },
    {
        name: 'Créer un serveur',
        path: '/Server-creation',
        id: '2'
    },
    {
        name: 'Gérer mon serveur',
        path: '/Server-management',
        id: '3'
    },
    {
        name: 'FAQ',
        path: '/FAQ',
        id: '4'
    },
    {
        name: 'Achète-moi un café',
        path: '/Coffee',
        id: '5'
    }
];

console.log(logo);

function Banner(){
    return (
        <div className='alp-banner'>
            <ul className="alp-categories">
                <Link className='alp-logo' to='/'>
                    <img className='alp-logo' src={logo} alt='Logo'/>
                </Link>
                <div className='toast'>
                    {CategoriesList.map((category) => (
                        <Link to={category.path}>
                            <li key={`${category.name}-${category.id}`}> {/*Key de la honte*/}
                                <h2 className='alp-category' >{category.name}</h2>
                            </li>
                        </Link>
                    ))}
                </div>
                <button className='font alp-loginButton'>
                    <Link to='/Login'>Se connecter</Link>
                </button>
            </ul>
        </div>
        
    );
}

export default Banner