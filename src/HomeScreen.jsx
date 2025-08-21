import { Link } from 'react-router-dom'
import userImage from './assets/FrontPicture.png'
import smdcImage from './assets/SMDC.jpg'

function HomeScreen(){
    
    return(
        <div className="container">
            <img className='smdc-image' src={smdcImage} alt="photo" />
            <p id='home-description'>Hello, I'm Christine - dedicated to helping you secure the best property deals with SMDC. 
                    Connect with me through the links here or save my contact instantly.</p>
            <div className="userImage">
                <img src={userImage} alt="photo" />
                <Link to="/info" className='continue' id='home-continue'>Let's Connect!</Link>
            </div>
        </div>
    );
}

export default HomeScreen