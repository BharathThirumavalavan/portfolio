import { ProjectTemplate } from '../components/projectCard'
import { projects } from '../helper/projects'
import { PageContext } from '../helper/ContextProvider'
import { useContext } from 'react'

export default function Projects () {
     const { isActive } = useContext(PageContext)

  return (
    <main
      className={
        isActive.lastPage === 'home'
          ? 'AnimateRight bg-projects py-32 mainWindow'
          : 'AnimateLeft  bg-projects py-32 mainWindow'
      }
    >
      <h2
        className='text-center md:text-8xl  text-4xl 
       projectTitle slideDown'
      >
        PROJECTS{' '}
      </h2>
      <section className='flex flex-col sm:flex-row md:px-24 xl:px-32 md:p-8 flex-wrap justify-center items-center px-2'>
        {projects.map((project, index) => (
          <ProjectTemplate {...project} key={index} />
        ))}
      </section>
    </main>
  )
}
