import {useState} from "react"
import {Link} from "react-router-dom"
import {BiMenuAltRight} from "react-icons/bi"
import {navbar} from "../data/navbar"



const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <>
         <div className="menu-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <BiMenuAltRight />
                </button>
            </div>

      
            <header className={`${isOpen ? 'header open' : 'header'}`}>
            <nav>
                <ul>
                {navbar.map(( {id, title, url}) => {
                     
                     return (
                         <li key={id} onClick={() => setIsOpen(!isOpen)}>
                             <Link to={url}>{title}</Link>
                         </li>
                     )
                 })}
                </ul>
            </nav>
        </header>
      
        </>
    )
}

export default Menu
/*
Зачем здесь использовать состояние????!
 const [links, setLinks] = useState(navbar)

 {links.map(( {id, title, url}) => {
                     
                      return (
                          <li key={id} onClick={() => setIsOpen(!isOpen)}>
                              <Link to={url}>{title}</Link>
                          </li>
                      )
                  })}

*/ 