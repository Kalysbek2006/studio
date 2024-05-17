import home from "./assets/img/Rectangle.png"
import './App.css'
import Header from "./header/Header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/Footer.jsx";

function App() {

  return (
    <>
      <div>
         <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${home})` }}>
             <Header/>
             <Home/>
         </div>
          <Footer/>
      </div>
    </>
  )
}

export default App
