import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import HomePage from './pages/homepage'

const App = () => {
  return (
      <Router>
        <Routes>
         <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignInPage />} />  
          <Route path='/signup' element={<SignUpPage />} />  

        </Routes> 
      </Router>
  )
}

export default App