
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
    const location = useLocation();
    const [ currentPage, setCurrentPage ] = useState(location.pathname);

    //Add class "selected" to A element when current page is set and remove for the rest
    useEffect(()=>{

        let links = document.getElementsByTagName("A")

        for (let i=0;i<links.length;i++){
            links[i].classList.remove("selected")
        }
        document.getElementById(currentPage).classList.add("selected");
    
    },[currentPage])

    return (
        <div className='header'>
            <nav>
                <Link id="/" to="/" onClick={()=>setCurrentPage("/")}>Home</Link>
                <Link id="/about" to="about" onClick={()=>setCurrentPage("/about")}>About</Link>
                <Link id="/work" to="work" onClick={()=>setCurrentPage("/work")}>Work</Link>
                <Link id="/contact" to="contact" onClick={()=>setCurrentPage("/contact")}>Contact</Link>
            </nav>
        </div>
    );
}
export default Header;