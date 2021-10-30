export const Card = (props)=>{

 return (
   <div className= { `${props?.className} shadow-2xl rounded-lg `}>
     {props.children}
   </div>
 )
}