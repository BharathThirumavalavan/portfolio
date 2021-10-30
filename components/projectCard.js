import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faServer } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import {Card} from '../helper/card'

export const ProjectTemplate = (props) => {

  const [entered, setEntered] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (entered) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [entered])

  function enterProject() {
    console.log(entered)
    setEntered(true)
  }

  function exitProject() {
    console.log(entered)
    setEntered(false)
  }
  return (
    <Card className='projectContainer flex my-4 md:m-8 flex-col md:flex-row md:h-64 md:justify-start md:items-center overflow-hidden animateScale'>
      <div
        className='imgContainer relative rounded-l-lg'
        onMouseEnter={enterProject}
        onMouseLeave={exitProject}
      >
        {open && (
          <a href={props.isDeployed ? props.deployedLink : props.githubLink}>
            <span
              className={
                entered
                  ? 'animateFadeIn overlay absolute flex items-center justify-center text-proPrimary p-2 '
                  : ' animateFadeOut overlay absolute flex items-center justify-center text-proPrimary p-2 '
              }
            >
              <FontAwesomeIcon icon={faLink} className='w-6 mr-2' />
              <p className='text-center font-semibold text-lg tracking-tighter '>
                {props.isDeployed ? 'Link' : 'Link not available'}
              </p>
            </span>
          </a>
        )}
        <Image
          src={props.img}
          className='imageHover '
          alt={props.title}
        />
      </div>

      <div className='detailsContainer flex flex-col justify-center md:justify-center items-center flex-wrap  md:py-3 pb-2'>
        <div>
          <h2 className='titleProject text-dark text-xl capitalize text-center p-3 font-semibold '>
            {props.title}
          </h2>
        </div>
        <div className='flex md:flex-col p-2 md:p-1 justify-evenly md:justify-start md:items-center'>
          <div>
            <p className=' text-dark font-semibold mt-1'>Technologies</p>
            <div className='text-sm text-gray-700 mt-3 md:p-0 px-4'>
              {props.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </div>
          </div>
          <div className='flex items-start flex-col justify-center'>
            <a href={props.githubLink}>
              <div className='flex flex-row justify-end items-center  text-dark hover:text-proLight my-4'>
                <FontAwesomeIcon icon={faGithub} className='w-6 mx-3' />
                <span className=' font-semibold text-sm'>
                  Checkout the code
                </span>
              </div>
            </a>
            <a href={props.isDeployed ? props.deployedLink : props.githubLink}>
              <div className='flex flex-row justify-end items-center text-dark  hover:text-proLight '>
                <FontAwesomeIcon icon={faServer} className='w-6  mx-3' />
                <span className='font-semibold text-sm'>
                  {props.isDeployed
                    ? 'Deployed on Netlify'
                    : 'Not yet deployed'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
