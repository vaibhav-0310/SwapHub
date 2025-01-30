import Header from './components/header'
import  './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';

function App() {

  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

    </>
  )
}

export default App
