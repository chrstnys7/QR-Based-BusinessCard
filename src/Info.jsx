import profilePic from './assets/ProfilePic.png'
import facebookLogo from './assets/facebook-logo.png'
import instagramLogo from './assets/Instagram-Logo.png'
import youtubeLogo from './assets/Youtube-logo.png'
import whatsAppLogo from './assets/whatsapp-logo.webp'
import viberLogo from './assets/viber-logo.png'
import tiktokLogo from './assets/tiktok-logo.webp'
import threadsLogo from './assets/threads-logo.png'
import telegramLogo from './assets/Telegram-Logo.png'

function Info(){

    return(
        <div className='info-container'>
            <div className='info-intro'>
                <div className='info-profilePic-container'>
                     <img className='info-profilePic' src={profilePic} alt="profilePic" />
                </div>
                <p className='info-name'>Christine S. Dayawon, RES</p>
                <p className='info-accr'>PRC accr. # 13158 <br /> DHSUD accr. # 18052</p>
                <div className='info-contacts'>
                    <button><a href="tel: +639989815844"><i className="fas fa-phone"></i></a></button>
                    <button><a href="https://m.me/CSDyourPropertyFinder"><i className="fas fa-comment-dots"></i></a></button>
                    <button><a href="mailto:dayawonchristine.smdcproperties@gmail.com"><i className="fas fa-envelope"></i></a></button>
                </div>
            </div>
            <div className='info-contacts-links'>
                <div className='facebook' id='links'>
                    <img src={facebookLogo} alt="facebook" />
                    <p>Add me on Facebook</p>
                    <button><a href="https://www.facebook.com/CSDyourPropertyFinder"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='instagram' id='links'>
                    <img src={instagramLogo} alt="instagram" />
                    <p>Follow me on Instagram</p>
                    <button><a href="https://www.instagram.com/csd.propertyspecialist/"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='youtube' id='links'>
                    <img src={youtubeLogo} alt="youtube" />
                    <p>Subscribe on Youtube</p>
                    <button><a href="https://www.youtube.com/@ChristineSD.19"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='whatsApp' id='links'>
                    <img src={whatsAppLogo} alt="whatsApp" />
                    <p>Chat with me on WhatsApp</p>
                    <button><a href="wa.me/639989815844"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='viber' id='links'>
                    <img src={viberLogo} alt="viber" />
                    <p>Chat with me on Viber</p>
                    <button><a href="https://connect.viber.com/business/7d07e364-75b7-11f0-ad22-e678e33e3231"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='tiktok' id='links'>
                    <img src={tiktokLogo} alt="tiktok" />
                    <p>Follow me on Tiktok</p>
                    <button><a href="https://www.tiktok.com/@christine.sd"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='threads' id='links'>
                    <img src={threadsLogo} alt="threads" />
                    <p>Chat with me on Threads</p>
                    <button><a href="https://connect.viber.com/business/7d07e364-75b7-11f0-ad22-e678e33e3231"><i class="fas fa-link"></i></a></button>
                </div>
                <div className='telegram' id='links'>
                    <img src={telegramLogo} alt="telegram" />
                    <p>Message me on Telegram</p>
                    <button><a href="https://www.tiktok.com/@christine.sd"><i class="fas fa-link"></i></a></button>
                </div>
            </div>
        </div>
    );
}

export default Info