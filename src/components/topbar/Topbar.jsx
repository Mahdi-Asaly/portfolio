import "./topbar.scss"
import {Person , Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
           <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">My Resume</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>0523469716</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>MahdiAsaly@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    this is right
                </div>
           </div>
        </div>
    )
}
