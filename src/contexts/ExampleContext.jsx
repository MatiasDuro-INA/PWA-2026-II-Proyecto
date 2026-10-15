import { createContext } from "react";


export const ExampleContext = createContext()



export const exampleProvider = ({children}) => {


  return (
    <ExampleContext.Provider>
        {children}
    </ExampleContext.Provider>
  )
}

