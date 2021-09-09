import "./contact.scss"
import {useState} from "react";
export default function Contact() {
    const [message,setMessage] = useState(false);
    const handleSubmit= (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    const handleClear = (e)=>{
        console.log("here in clear")
        document.getElementById("email").value="";
        document.getElementById("message").value="";

    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="email" placeholder="Email"/>
                    <textarea id="message" placeholder="Message"></textarea>
                    <button type="submit" id="submit" className="btn btn-primary" onClick={handleClear}>Send</button>
                    {message &&
                     <span>Thanks, I will review your message and reply ASAP !</span>
                    }
               </form>
            </div>
        </div>
    )
}
