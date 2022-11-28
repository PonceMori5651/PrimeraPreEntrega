import './NavBar.css';
import Link from './Link';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
      
      <nav className='nav'>
        <a href="#" className='NombreLogo'><p>TECNOMMERCE</p></a>
        <ul className='padreLinks'>
          <Link text="Inicio"/>
          <Link text="Tecnologia"/>
          <Link text="Muebles"/>
          <Link text="Moda"/>
        </ul>
        <CartWidget/>
      </nav>
    </>
  )
}
export default Navbar;