"use client"
import React from 'react'
export const ThemeContext = React.createContext({
    ContactOn:false,
    toggleContact:()=>{}
    })
    
    export const ThemeProvider = ({
      children,}:Readonly<{children:React.ReactNode}>
    
    )=>{
      const [ContactOn,setContact] = React.useState(false);
      
      const toggleContact=()=>{
        setContact(!ContactOn)
       
      }

        React.useEffect(() => {
            if(ContactOn){

                document.body.style.overflow = 'hidden'
            }
            else{
                document.body.style.overflow = 'scroll'
    
            }
  }, [toggleContact]);
      return(
        <ThemeContext.Provider value={{ContactOn,toggleContact}}>
            {children}
        </ThemeContext.Provider >
      )
    }