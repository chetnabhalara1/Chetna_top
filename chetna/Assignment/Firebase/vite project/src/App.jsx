import { lazy, Suspense, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Jsonserver from './Jsonserver'
// import Fetchcomponent from './Fetchcomponent'
// import Home from './Home'
// import Contact from './Contact'
const Home = lazy(()=>import('./Home'))
const Contact =lazy(()=>import('./Contact'))

function App() {


  return (
    <>
  {/* <Jsonserver/> */}
  {/* <Fetchcomponent/> */}
  <Suspense fallback={<div>loading...........</div>}>
  <Home/>
  </Suspense>

 <Suspense fallback={<div> wait wait........</div>}>
 <Contact/>
 </Suspense>
  
    </>
  )
}

export default App
