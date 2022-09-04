import React, {useReducer} from 'react'
import AppContext from "./appContex";
import initialeState from './initialeState';
import reducer from './reducer'






const AppProvaider =  ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialeState) 
  return (
   <AppContext.Provider value={{mensaje:state.mensajes}}>
        {children}
   </AppContext.Provider>
  )
}

export default AppProvaider

