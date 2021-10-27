import { faHome, faIdCardAlt, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, } from 'react'
import {PageContext} from './ContextProvider'

export const Navbar =()=>{
 const {triggerPage,isActive} = useContext(PageContext)


 function triggerFunction(data){
   const toPage = data 
    let fromPage = null;
   for (const key in isActive) {
     if (isActive[key]) {
      fromPage = key
      break;
     } 
   }
    triggerPage(toPage, fromPage)
 }

 return (
   <>
     <div
       className='absolute flex flex-row top-10 left-0 justify-center items-center w-screen z-10 text-dark text-lg font-sans font-semibold navBar '
     >
       <button
         className='list-none mx-10  activePage'
         onClick={triggerFunction.bind(this, 'home')}
       >
         <FontAwesomeIcon
           icon={faHome}
           className={
             isActive?.home
               ? `activeIcon navIcon p-2`
               : 'passiveIcon navIcon  p-2'
           }
         />
       </button>
       <button
         className='list-none mx-10'
         onClick={triggerFunction.bind(this, 'project')}
       >
         <FontAwesomeIcon
           icon={faTasks}
           className={
             isActive?.project
               ? `activeIcon navIcon p-2`
               : 'passiveIcon navIcon  p-2'
           }
         />
       </button>
       <button
         className='list-none mx-10 '
         onClick={triggerFunction.bind(this, 'contact')}
       >
         <FontAwesomeIcon
           icon={faIdCardAlt}
           className={
             isActive?.contact
               ? `activeIcon navIcon p-2`
               : 'passiveIcon navIcon  p-2'
           }
         />
       </button>
     </div>
   </>
 )
}