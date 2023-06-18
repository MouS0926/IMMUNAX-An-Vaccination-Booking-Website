import './App.css';
import AdminNavbar from './Components/AdminNavbar';
import Allroutes from './Components/Allroutes';
import Hero from './Components/CompHome/Hero';
import Navbar from './Components/Navbar';
import { Adminauth } from './Context/Adminauthcontext';
import { useContext } from 'react';




function App() {

  const { authState,loginUser}=useContext(Adminauth)

  return (
    <div className="">
      {
        authState.isAuth
        ?
        <AdminNavbar />
        :
        <Navbar/>
      }
      
    
        <Allroutes/>
    </div>
  );
}

export default App;
