import pokemon from '../assets/pokemon.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faServer } from '@fortawesome/free-solid-svg-icons'
import {  useState, useEffect } from 'react'


export const Pokemon = () => {
  const [entered, setEntered] = useState(false)
  const [open, setopen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (entered) {
        setopen(true)
      } else {
        setopen(false)
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [entered])

  function enteredPojects() {
    setEntered(true)
  }

  function exitedPojects() {
    setEntered(false)
  }
  return (
    <div className='  shadow-2xl bg-proPrimary m-4 projectContainer rounded-lg flex'>
      <div
        className='relative w-1/2 rounded-l-lg overflow-hidden'
        onMouseEnter={enteredPojects}
        onMouseLeave={exitedPojects}
      >
        {open && (
          <a href='https://pokemonfind.netlify.app/'>
            <span
              class={
                entered
                  ? 'animateFadeIn overlay absolute flex items-center justify-center text-proPrimary p-2 '
                  : ' animateFadeOut overlay absolute flex items-center justify-center text-proPrimary p-2 '
              }
            >
              <FontAwesomeIcon icon={faLink} className='w-6 mr-2' />
              <p className='text-center font-semibold text-lg tracking-tighter '>
                Link
              </p>
            </span>
          </a>
        )}
        <Image src={pokemon} height={500} width={500} className='imageHover' />
      </div>

      <div className='flex flex-col justify-start  flex-wrap pl-6 py-3'>
        <h2 className='text-dark text-xl capitalize text-center p-3 font-semibold '>
          Pokemon Finder
        </h2>
        <p className=' px-8 text-dark font-semibold mt-1'>Technologies</p>
        <div className='text-sm text-gray-700 mt-3 px-8'>
          <li>Next js</li>
          <li>Tailwind CSS</li>
          <li>Axios</li>
        </div>
        <a href='https://github.com/BharathThirumavalavan/PokemonAPINextjs'>
          <div className='flex flex-row justify-end items-center p-2 text-dark hover:text-proLight my-3'>
            <FontAwesomeIcon icon={faGithub} className='w-6  mx-3' />
            <span className=' font-semibold text-sm'>Checkout the code</span>
          </div>
        </a>
        <a href='https://pokemonfind.netlify.app/'>
          <div className='flex flex-row justify-end items-center text-dark  hover:text-proLight '>
            <FontAwesomeIcon icon={faServer} className='w-6  mx-3' />
            <span className='font-semibold text-sm'>Deployed on netlify</span>
          </div>
        </a>
      </div>
    </div>
  )
}
