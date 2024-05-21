import home from "./assets/img/Rectangle.png"
import './App.css'
import Header from "./header/Header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/Footer.jsx";
import Corporations from "./corporations/Corporations.jsx";
import Development from "./development/development.jsx";
import Work from "./work/work.jsx";

function App() {

  return (
    <>
      <div>
          <h1 className="text-red-500 text-center"></h1>
         <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${home})`}}>
             <Header/>
             <Home/>
         </div>
          <Corporations/>
          <Development/>
          <Work/>
          <Footer/>
      </div>
    </>
  )
}

export default App
