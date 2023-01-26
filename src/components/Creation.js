import Banner from './Banner.js';
import logo from '../styles/Alpha_Transparent.png'
import '../styles/Creation.css'
import { Link } from "react-router-dom"

const smallConfig = {
    url:logo,
    type:"6 Joueurs",
    description:"MINIMALE"
}

const medConfig = {
    logoUrl:'../styles/Alpha_logo.png',
    type:"10 Joueurs",
    description:"STANDARD"
}

const largeConfig = {
    logoUrl:'../styles/Alpha_logo.png',
    type:"14 Joueurs",
    description:"MAXIMALE"
}

function Logo (props){
    return (
        <div>
            <img 
                className='Logo'
                src={props.Url}
                alt=''
            />
        </div>
    );
}

function Type (props){
    return (
        <div>
            <div className='Type'>
                <p>Pour</p>
            </div>
            <div className='Type white'>
                <span>{props.type}</span>
            </div>
        </div>

    )
}

function Description (props){
    return (
        <div className='Description'>
            <button>{props.description}</button>
        </div>
    )
}

function Option (props){
    return (
        <div>
            <Type type={props.type}/>
            <Logo logo={props.url}/>
            <Description description={props.description}/>
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
                    <div>
                        <button className='ButtonStack' id='button1'>
                            <Link to='/CreationOptions'>Creer un serveur</Link>
                        </button>
                    </div>
                    
                </div>
                <div className='Box' id='grad2'>
                    <Option
                        logo={medConfig.url}
                        type={medConfig.type}
                        description={medConfig.description}
                    />
                    <div>
                        <button className='ButtonStack' id='button2'>
                            <Link to='/CreationOptions'>Creer un serveur</Link>
                        </button>
                    </div>
                </div>
                <div className='Box' id='grad3'>
                    <Option
                        logo={largeConfig.url}
                        type={largeConfig.type}
                        description={largeConfig.description}
                    />
                    <div>

                    </div>
                    <div>
                        <button className='ButtonStack' id='button3'>
                            <Link to='/CreationOptions'>Creer un serveur</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Creation