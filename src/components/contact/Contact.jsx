import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">

        <div className="main">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
            {message && <span>This form is not currently working!<br/>
                              Please contact me by email.</span>}
          </form>
        </div>

    </div>
  )
}
