import React from 'react'
import logo from '../../Assets/Web 1920 – next movies/favicon.svg'
import facebookIcon from '../../Assets/Web 1920 – next movies/facebook-share-icon.svg'
import linkedinIcon from '../../Assets//Web 1920 – next movies/linkedin-share-icon.svg'
import twitter from '../../Assets/Web 1920 – next movies/twitter-share-icon.svg'
import insta from '../../Assets/Web 1920 – next movies/instagram-share-icon.svg'
import youtubeIcon from '../../Assets/Web 1920 – next movies/youtube-share-icon.svg'
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div id='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div id='contact'>
        <p id='contact-title'>Contact us</p>
        <p id='contact-email'>support@nextmovies.com</p>
        <p id='contact-details'>Mon – Fri | 6:00am – 5:00 pm PT</p>
      </div>
      <div className='contact-media' data-testid='contact-media'>
        <span>
          <img src={facebookIcon} alt="facebook icon" data-testid="media-icon"/>
        </span>
        <span>
          <img src={linkedinIcon} alt="linkedin icon" data-testid="media-icon"/>
        </span>
        <span>
          <img src={twitter} alt="twitter icon" data-testid="media-icon"/>
        </span>
        <span>
          <img src={insta} alt="instagram icon" data-testid="media-icon"/>
        </span>
        <span>
          <img src={youtubeIcon} alt="instagram icon" data-testid="media-icon"/>
        </span>
      </div>
    </footer>
  )
}

export default Footer