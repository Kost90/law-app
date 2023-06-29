import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/services/Services";
import Bookappointment from "./pages/Bookappointment";
import Ourteame from "./pages/Ourteame";
import Contactus from "./pages/Contactus";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { DataProvider } from './components/Context/UseContext';


function App() {
  return (

    
<DataProvider>
  <div>

    <NavBar/>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="bookappointment" element={<Bookappointment/>}/>
        <Route path="ourteame" element={<Ourteame/>}/>
        <Route path="contactus" element={<Contactus/>}/>
      </Routes>

    <Footer/>


  </div>
</DataProvider>


  )
}

export default App;
