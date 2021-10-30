import React, { useState } from 'react'

export const PageContext = React.createContext({triggerPage:{},isActive:{}})

export const ProviderAPI = (props) => {
  const [isActive, setIsActive] = useState({home:true,contact:false,project:false, lastPage:null})

  const triggerPage=(setValue,fromPage)=> {
   switch (setValue) {
     case 'home':
       setIsActive({
         home: true,
         contact: false,
         project: false,
         lastPage: fromPage,
       })
       break
     case 'project':
       setIsActive({
         home: false,
         contact: false,
         project: true,
         lastPage: fromPage,
       })
       break
     case 'contact':
       setIsActive({
         home: false,
         contact: true,
         project: false,
         lastPage: fromPage,
       })
       break
     default:
       break
   }
  }


  return (
    <PageContext.Provider
      value={{ triggerPage: triggerPage, isActive: isActive }}
    >
      {props.children}
    </PageContext.Provider>
  )
}