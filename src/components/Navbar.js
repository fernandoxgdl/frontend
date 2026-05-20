import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
 return(
  <div className='navbar'>

   <Link to="/inicio">Inicio</Link>
   <Link to="/quienes">Quienes Somos</Link>
   <Link to="/mision">Misión</Link>
   <Link to="/vision">Ubicacion</Link>
   <Link to="/politicas">Contacto</Link>
   <Link to="/login">Login</Link>
   
  </div>
 );
}

export default Navbar;