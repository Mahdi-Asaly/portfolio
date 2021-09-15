import "./contact.scss"
import {useState} from "react";
import emailjs from "emailjs-com";
export default function Contact() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');


    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleSubject = (event) => {
        setSubject(event.target.value);
    }
         


    function sendEmail(e) {
        if (!name || !email) {
            console.log("name empty");
             e.preventDefault();
             return;
         }

        e.preventDefault();
        emailjs.sendForm('service_u6nmfpd', 'template_9ahli7q', e.target, 'user_uXHw7zQ0Y4gwNQEL1YyNI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        setMessage(true);
      }

    const [message,setMessage] = useState(false);


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form id="form-g" onSubmit={sendEmail}>
                    <input type="text" id="name" className="form-control" placeholder="Name" value={name} onChange={handleChange} name="name"/>
                    <input type="email" id="email" className="form-control" placeholder="Email Address" value={email} onChange={handleEmail} name="email"/>
                    <input type="text" id="subject" className="form-control" placeholder="Subject" value={subject} onChange={handleSubject} name="subject"/>
                    <textarea className="form-control" id="message" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    <input type="submit" className="button" value="Send Message"></input>

                    {message &&
                     <span>Thanks, I will review your message and reply ASAP !</span>
                    }
               </form>
            </div>
        </div>
    )
}
