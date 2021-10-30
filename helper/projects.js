import pokemon from '../assets/pokemon.png'
import rite from '../assets/rite.png'
import login from '../assets/login.png'
import redux from '../assets/reduxCounter.png'
import ball from '../assets/bounchingBall.png'
import randomJS from '../assets/random.png'

export const projects = [
  {
    title: 'Pokemon Finder',
    isDeployed: true,
    deployedLink: 'https://pokemonfind.netlify.app/',
    githubLink: 'https://github.com/BharathThirumavalavan/PokemonAPINextjs',
    technologies: ['Next.js', 'TailwindCSS', 'Axios'],
    img: pokemon,
  },
  {
    title: 'RITE startup',
    isDeployed: false,
    deployedLink: null,
    githubLink: 'https://github.com/BharathThirumavalavan/RITE-frontend-React',
    technologies: ['React.js', 'Bootstrap and SASS', 'Axios'],
    img: rite,
  },
  {
    title: 'JWT Authentication',
    isDeployed: false,
    deployedLink: null,
    githubLink: 'https://github.com/BharathThirumavalavan/RITE-backend',
    technologies: ['Node.js and Express.js', 'Passport.js and jwt', 'MongoDB'],
    img: login,
  },
  {
    title: 'Redux Counter',
    isDeployed: false,
    deployedLink: null,
    githubLink: 'https://github.com/BharathThirumavalavan/reduxCounter',
    technologies: ['Redux@toolkit', 'Next.js', 'TailwindCSS'],
    img: redux,
  },
  {
    title: 'Java GUI',
    isDeployed: false,
    deployedLink: null,
    githubLink: 'https://github.com/BharathThirumavalavan/reduxCounter',
    technologies: ['Redux redux@toolkit', 'Next.js', 'TailwindCSS'],
    img: ball,
  },
  {
    title: 'Redux Counter',
    isDeployed: false,
    deployedLink: null,
    githubLink:
      'https://github.com/BharathThirumavalavan/bunchofNativeJSprojects',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    img: randomJS,
  },
]
