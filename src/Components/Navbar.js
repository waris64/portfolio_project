import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
   
    return (
        
        <div className='Header'>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>

            <div className='hamburger'>
                        
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Project">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar