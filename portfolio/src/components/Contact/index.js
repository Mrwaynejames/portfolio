import './index.css'

const Contact = () => {
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p>I am Looking forward to hearing from you

                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact