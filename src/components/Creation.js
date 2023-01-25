import Banner from './Banner.js';
import logo from '../styles/Alpha_Transparent.png'
import '../styles/Creation.css'
import { Link } from "react-router-dom"

const smallConfig = {
    url:logo,
    type:"Petite",
    description:"Configuration Minimale, suffisante pour une experience Vanilla a 4 Joueurs"
}

const medConfig = {
    logoUrl:'../styles/Alpha_logo.png',
    type:"Moyenne",
    description:"Configuration Standard, convenable pour un monde Vanilla jusqu'a 10 Joueurs"
}

const largeConfig = {
    logoUrl:'../styles/Alpha_logo.png',
    type:"Large",
    description:"Configuration Minimale, optimale pour un serveur Vanilla de 14 Joueurs"
}

function Logo (props){
    return (
        <div>
            <img 
                className='logo'
                src={props.Url}
                alt=''
            />
        </div>
    );
}

function Type (props){
    return (
        <div>
            <h2>{props.type}</h2>
        </div>
    )
}

function Description (props){
    return (
        <div>
            <p>{props.description}</p>
        </div>
    )
}

function Option (props){
    return (
        <div>
            <Type type={props.type}/>
            <Logo logo={props.url}/>
            <Description description={props.description}/>
            <button className=''>
                <Link to='/CreationOptions'>Creer un serveur</Link>
            </button>
        </div>
    )

}

function Creation(){
    return(
        <div>
            <div>
                <Banner />
            </div>
            <div className='BoxStack'>
                <div className='Box' id='grad1'>
                    <Option 
                        logo={smallConfig.url}
                        type={smallConfig.type}
                        description={smallConfig.description}
                    />
                </div>
                <div className='Box' id='grad2'>
                    <Option
                        logo={medConfig.url}
                        type={medConfig.type}
                        description={medConfig.description}
                    />
                </div>
                <div className='Box' id='grad3'>
                    <Option
                        logo={largeConfig.url}
                        type={largeConfig.type}
                        description={largeConfig.description}
                    />
                </div>
            </div>
        </div>
    );
}

export default Creation