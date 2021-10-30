import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faGoogle,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export const ContactSection = () => {

  
  return (
    <section id='contact_us'>
      <div className='contactUs absolute flex flex-row md:flex-col md:p-2 md:justify-center w-screen left-2 justify-center md:-bottom-0 lg:-bottom-0 '>
        <a href='https://github.com/BharathThirumavalavan/'>
          <FontAwesomeIcon
            icon={faGithubAlt}
            className='text-4xl my-1 p-1 text-dark  navIcon mx-5 md:mx-0'
          />
        </a>
        <a href='https://www.linkedin.com/in/bharaththirumavalavan/'>
          <FontAwesomeIcon
            icon={faLinkedin}
            className=' text-4xl my-1 p-1  text-dark  navIcon  mx-5 md:mx-0'
          />
        </a>
        <a href='https://www.instagram.com/bharath_thirumavalavan/'>
          <FontAwesomeIcon
            icon={faInstagram}
            className='text-4xl my-1 p-1  text-dark  navIcon  mx-5 md:mx-0'
          />
        </a>
        <a href='mailto:t.bharathvignesh@gmail.com'>
          <FontAwesomeIcon
            icon={faGoogle}
            className=' text-4xl my-1 p-1  text-dark  navIcon  mx-5 md:mx-0'
          />
        </a>
      </div>
    </section>
  )
}
