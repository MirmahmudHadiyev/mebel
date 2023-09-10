
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Routes from '../Routes'

const App = () => {
  return (
   
    <BrowserRouter>
    <ToastContainer autoClose={1000} pauseOnHover={false} />
      <Routes/>
    </BrowserRouter>
   
  )
}

export default App
