import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Home_page/Homepage.jsx'
import Services from "./pages/services/Services";
import Bookappointment from './pages/Bookappointment/Bookappointment';
import Ourteame from "./pages/Our_team/Ourteame";
import Contactus from "./pages/Contact_us/Contactus";
import ChatPage from './pages/Chat_page/ChatPage';
import NavBar from  './components/ui/navbar/NavBar'
import Footer from  './components/ui/footer/Footer'
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
        <Route path="chatpage" element={<ChatPage/>}/>
        <Route path="ourteame" element={<Ourteame/>}/>
        <Route path="contactus" element={<Contactus/>}/>
      </Routes>

    <Footer/>


  </div>
</DataProvider>


  )
}

export default App;
