import Banner from './Banner.js';
import '../styles/Home.css'

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
        </div>

    )
}

export default Contact