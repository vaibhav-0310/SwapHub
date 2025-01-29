import Header from './components/header'
import  './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {

  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
