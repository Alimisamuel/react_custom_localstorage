// Using it in globally in your content
import { LocalStorage } from './LocalStorage'

import React from 'react'
const name = LocalStorage.get("name_of_the_stored_data")


const fetchLoginData = async () =>{
  try{
    // ....your fetch actions

    LocalStorage.set("saved_data", res?.data);
  }catch(err){
// ...handle your errors
  }


}
const App = () => {
  return (

    // using the LocalStorage .get without any checks
    <div>{name}</div>
  )
}

export default App