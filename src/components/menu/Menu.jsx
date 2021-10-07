import "./menu.scss"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active") }>
            {/* <ul>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#intro"><HomeOutlinedIcon/>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#contact">Contact</a>
                </li>                
            </ul> */}
            <div className="menu___class">
            <a href="#intro">
                <div className="item___class" onClick={()=>setMenuOpen(false)}>
                    <div className="icon___class">
                        <HomeOutlinedIcon fontSize="large"/>
                    </div>
                    <h2>Home</h2>
                </div>
                </a>
                <a href="#portfolio">
                    <div className="item___class" onClick={()=>setMenuOpen(false)}>
                        <div className="icon___class">
                            <AccountTreeOutlinedIcon fontSize="large"/>
                        </div>
                        <h2>Projects</h2>
                    </div>
                </a>
                 <a href="#works">
                    <div className="item___class" onClick={()=>setMenuOpen(false)}>
                                <div className="icon___class">
                                    <WorkOutlineOutlinedIcon fontSize="large"/>
                                </div>
                                <h2>Works</h2>
                     </div>
                </a>
                <a href="#contact">
                    <div className="item___class" onClick={()=>setMenuOpen(false)}>
                        <div className="icon___class">
                            <ContactPhoneOutlinedIcon fontSize="large"/>
                        </div>
                        <h2>Contact</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}
