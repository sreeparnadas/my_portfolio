import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_43tc7h9', 'template_43mf7zt', form.current, {
        publicKey: 'ZCiR3-5STB_hcTSvn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    return (
        <>
           <h3 className='text-center pt-5'>Let's work together 📩</h3>

           <div className='d-flex justify-content-center mb-5'>
                <div className="card w-50">
                    <div className="card-header text-info fs-3 text-center">
                        Contact me
                    </div>
                    <div className="card-body">
                        <form className='d-flex flex-column' ref={form}>
                            <div className='form-group'>
                                <label>Full Name:</label>
                                <input type='text' className='form-control' name='user_name'></input>
                            </div>
                            <div className='form-group'>
                                <label >E-mail:</label>
                                <input type='text' className='form-control' name='user_email'></input>
                            </div>
                            <div className='form-group'>
                                <label>Subject:</label>
                                <input type='text' className='form-control' name='subject'></input>
                            </div>
                            <div className='form-group mt-3'>
                                <textarea aria-label="With textarea" className='form-control' name='message'></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-success mt-3" name='send_mail' id='send-mail-btn' onClick={sendEmail}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>  
           </div>
            
        </>
    )
}


export default Contact;