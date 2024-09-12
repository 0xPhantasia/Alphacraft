import Banner from './Banner.js';
import '../styles/Contact.css'
import githubPng from '../styles/Github_Logo.png'

const github = {
    url:"https://github.com/0xPhantasia",
    logo:githubPng
}

const linkedin = {
    url:"https://www.linkedin.com/in/evan-mestre/",
    logo:""
}

const discord = {
    url:"",
    logo:""
}

function BoxContent (props){
    return (
        <div>
        <img
            className='Logo'
            src={props.logo}
            alt=''
        />
        </div>
    )
}

function Contact(){
    return(
        <div>
            <div>
                <Banner />
            </div>
            <div className='center'>
                <h1 className='white'>Me contacter</h1>
                <h3>Des questions ou des recommendations à faire ? N'hésitez pas !</h3>
            </div>
            <div className='BoxStack'>
                <div className='Box'>
                    <BoxContent 
                        url={github.url}
                        logo={github.logo}
                    />
                    <div>
                        <button className='Buttons'>
                            Contact
                        </button>
                    </div>
                </div>

                <div className='Box'>
                    <BoxContent 
                        url={discord.url}
                        logo={discord.logo}
                    />
                    <div>
                        <button>

                        </button>
                    </div>
                </div>

                <div className='Box'>
                    <BoxContent 
                        url={linkedin.url}
                        logo={linkedin.logo}
                    />
                    <div>
                        <button>

                        </button>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Contact