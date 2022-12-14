import './index.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_1ug3f07', form.current, 'service_b8z3oew')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
        


        <div className='container contact-page card'>
          <div className="text-zone">
                <h1>
                Contact Me
                </h1>
                <p>
                  Please dont hesitate to reach out. I look forward to hearing from you.
                </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required
                    />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required
                    />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
            </div>
        </div>
    )
}
export default Contact