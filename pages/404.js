
import Image from 'next/image'
import error from '../assets/404-error.png'

export default function ErrorPage (){
 return (
   <div className='AnimateUp bg-error w-screen h-screen flex items-center justify-center flex-col errorPage text-errorLight'>
     <div className='delayAnimate my-3'>
       <h2 className='text-center text-6xl font-semibold my-2'>
         Oops something went wrong!{' '}
       </h2>
       <h4 className='text-center text-4xl '>Error 404: Page not found </h4>
     </div>
     <div className='delayAnimate my-3'>
       <Image src={error} alt={'Error Message'} width={400} height={400} />
     </div>
   </div>
 )
}