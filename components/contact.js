import { faGitAlt, faGithub, faGithubAlt, faGoogle, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faGraduationCap, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { PageContext } from './ContextProvider'

export const ContactUs = () => {


  return (
    <>
      <div className='AnimateRight contactWindow bg-contact text-contactLight py-32 md:py-16'>
        <div className='flex flex-col flex-wrap justify-center items-center text-contactPrimary md:py-16'>
          <div className='flex flex-col bg-contactSec md:w-2/3 max-w-2xl py-5 px-8 rounded-lg shadow-2xl mb-16 rotateScale'>
            <h2 className='text-center text-4xl mb-5'>Resume</h2>
            <div className='bg-contactPri my-5 px-6 py-8 text-dark rounded shadow-xl'>
              <h2 className=' text-2xl mb-5 font-semibold'>Experience:</h2>
              <h3 className=' font-semibold my-3 font-xl'>
                Customer Service Representative
              </h3>
              <p className='  text-gray-500 text-sm flex items-center'>
                <FontAwesomeIcon icon={faCalendar} className='w-4 mr-2' />
                2019-Ongoing
              </p>
              <p className='my-3 text-base '>
                Groupon is an American global e-commerce marketplace connecting
                subscribers with local merchants by offering activities, travel,
                goods and services in 15 countries.
              </p>
              <li className='text-gray-600 '>Received productivity award.</li>
              <li className='text-gray-600 '>Promoted to Resolution Team.</li>
            </div>

            <div className='bg-contactPri my-5 px-6 py-8 text-dark rounded shadow-xl'>
              <h2 className=' text-2xl mb-5 font-semibold'>Education:</h2>
              <h3 className=' font-semibold my-1 font-xl text-lg'>
                Bachelor of Engineering
              </h3>
              <h4 className=' text-base mb-3 font-medium'>
                Alagappa College of Engineering
              </h4>
              <p className='  text-gray-500 text-sm flex items-center justify-start'>
                <FontAwesomeIcon icon={faCalendar} className='w-4 mr-2' />
                <span className='mr-3'> 2014-2018</span>
                <FontAwesomeIcon icon={faLocationArrow} className='w-4 mr-2 ' />
                <span className='mr-3'> Karaikudi, TN</span>
                <FontAwesomeIcon icon={faGraduationCap} className='w-4 mr-2' />
                <span className='mr-3'> 7.3 GPA</span>
              </p>

              <h3 className=' font-semibold mt-8 my-1 font-xl text-lg'>
                Higher Secondary
              </h3>
              <h4 className=' text-base mb-3 font-medium'>
                Laxmi Raman School
              </h4>
              <p className='  text-gray-500 text-sm flex items-center justify-start'>
                <FontAwesomeIcon icon={faCalendar} className='w-4 mr-2' />
                <span className='mr-3'> 2013-2014</span>
                <FontAwesomeIcon icon={faLocationArrow} className='w-4 mr-2 ' />
                <span className='mr-3'> Tirunelveli, TN</span>
                <FontAwesomeIcon icon={faGraduationCap} className='w-4 mr-2' />
                <span className='mr-3'> 91%</span>
              </p>
            </div>

            <a
              href='https://drive.google.com/file/d/1ATUqAGbH2DniaIqo2rkzsPsfgxdreg8n/view?usp=sharing'
              className='px-4 py-2 bg-contactPri text-center text-dark rounded shadow-xl font-semibold tracking-wide'
            >
              Download CV
            </a>
          </div>
          <div className='flex flex-row'>
            <div className='w-16 p-3 m-5 contactPopup github comeFromLeft'>
              <a href='https://github.com/BharathThirumavalavan/'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='w-16 p-3 m-5 contactPopup google comeFromLeft'>
              <a href='mailto:t.bharathvignesh@gmail.com'>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
            <div className='w-16 p-3  m-5 contactPopup linkedin comeFromRight'>
              <a href='https://www.linkedin.com/in/bharaththirumavalavan/'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className='w-16 p-3 m-5 contactPopup instagram comeFromRight'>
              <a href='https://www.instagram.com/bharath_thirumavalavan/'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
