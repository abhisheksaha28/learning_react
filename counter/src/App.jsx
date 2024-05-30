import { useState } from 'react'
//4.useState : declares a state variable that you can update directly.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //5.how to write useState
  //const[indx_0,indx_1] = useState(anything_can_be_written)
  //      login,isLoggedIn
  //      counter, setCounter\//above are some styles of writing so that tey look beautiful, though any thing can be written
  //hre we will be ussing let, bec yhe value i vaiable
  let [counter,setCounter] = useState(0)
  //6.let counter = 0  no need of ths now
  const addVal = ()=>{
    //7.set the code
    counter = counter+1
    setCounter(counter)
    //above code directly can also be written  setCounter(counter+1)

    //1.till now the value text in  the UI is not changed, though func is workinh fine in console
    //2.to emove such inconssistenccy in UI , to chage the texts, if we use js then 1st we have to select the element and then select html then by changinng value we would have changed the UI valu
    //3. react provides hooks,tat directly works upon the texts in UI
    console.log("clicked",counter)

  }
  const decVal = ()=>{
    counter = counter - 1
    if(counter<0){
      setCounter(0)
      counter=0
      console.log("cant ne -ve")
    } 
    else{
      setCounter(counter)
    console.log("clicked",counter)
    }

  }

  
  return (
    <>
       <h1>Abhishek saha</h1>
       <h3>Value : {counter}</h3>
       <button  onClick={addVal}>add</button>
       <br />
       <button onClick={decVal}>decrease</button>
    </>
  )
}

export default App
