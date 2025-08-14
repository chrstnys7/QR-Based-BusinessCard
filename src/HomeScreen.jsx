import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import userImage from './assets/userImage.png'

function HomeScreen(){
    
    return(
        <div className="container">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="intro">Hello,<br />I'm Christine <br /> of SMDC</h1>
            <div className="userImage">
                <img src={userImage} alt="photo" />
                <Link to="/info" className='continue'>Let'ss Connect!</Link>
            </div>
        </div>
    );
}

export default HomeScreen