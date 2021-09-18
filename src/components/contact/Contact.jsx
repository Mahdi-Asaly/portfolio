import "./contact.scss"
import {useState} from "react";
import emailjs from "emailjs-com";
export default function Contact() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [msgFlag, setMsgFlag] = useState(false);

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
             e.preventDefault();
             alert('one or more fields are empty :(');
             return;
         }
         if(msgFlag){
             alert('Msg was already sent, please try again later.');
             e.preventDefault();
             return;
         }
        setMsgFlag(!msgFlag); //sending the flag to true
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
               <h2>Contact </h2>
                <h3>Do you have a business and wants to</h3>
                <h3> publish it to the world? 
                    I'm here to help you! </h3>
                <form id="form-g" onSubmit={sendEmail}>
                    <input type="text" id="name" className="form-control" placeholder="Name" value={name} onChange={handleChange} name="name"/>
                    <input type="email" id="email" className="form-control" placeholder="Email Address" value={email} onChange={handleEmail} name="email"/>
                    <input type="text" id="subject" className="form-control" placeholder="Subject" value={subject} onChange={handleSubject} name="subject"/>
                    <textarea className="form-control" id="message" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    <input type="submit" className="button" value="Send Message"></input>
                    {message &&
                     <span>Thanks, I will review your message and reply ASAP ! 
                         If you still have questions please call me at : 052-3469716
                     </span>
                    }
               </form>
            </div>
        </div>
    )
}
