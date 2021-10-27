import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faGoogle,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export const ContactSection = () => {

  
  return (
    <section className='contactUs' id='contact_us'>
      <div className='flex flex-row top-4 contactUs'>
        <div className='px-4 py-8'>
          <a href='https://github.com/BharathThirumavalavan/'>
            <FontAwesomeIcon
              icon={faGithubAlt}
              className='w-10 p-2 my-3 text-dark  navIcon'
            />
          </a>
          <a href='https://www.linkedin.com/in/bharaththirumavalavan/'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className=' w-10 p-2 my-3 text-dark  navIcon'
            />
          </a>
          <a href='https://www.instagram.com/bharath_thirumavalavan/'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='w-10 p-2 my-3 text-dark  navIcon'
            />
          </a>
          <a href='mailto:t.bharathvignesh@gmail.com'>
            <FontAwesomeIcon
              icon={faGoogle}
              className=' w-10 p-2 my-3 text-dark  navIcon'
            />
          </a>
        </div>
      </div>
    </section>
  )
}
