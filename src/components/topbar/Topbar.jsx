import './topbar.scss'
import {Person, Mail, Menu} from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className='topbar'>
        <div className="wrapper">
            <div className="left">

                <a href="#intro" className='logo'>Umut Ünvermiş</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>543 275 57 34</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" href="umutunvermis@gmail.com"/>
                    <span>umutunvermis@gmail.com</span>
                </div>

            </div>
            <div className="right" onClick={()=>setMenuOpen(!menuOpen)}>
                <Menu className='Menu'/>
            </div>

        </div>
    </div>
  )
}
