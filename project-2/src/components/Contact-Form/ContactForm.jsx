import React from 'react'
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from 'react'; 

const ContactForm = () => {
    const [name, setName] = useState("Madhav");
    const [email, setEmail] = useState("madhav@gmail.com");
    const [text, setText] = useState("dnsdnsidnsidnwin");

    const handleClick =  () => {
        console.log("I am from chat");
    }

    const handleCall = () => {
        console.log("I am from call");
    }

    const handleEmail = () => {
        console.log("I am from email");
    }

    const SubmitEvent = (event) => {
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

  return (
    <section className={styles.container}>
        <div className={styles.contactform}>
            <div className={styles.topBut}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} onClick={handleClick}/>
                <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} onClick={handleCall}/>
            </div>
            <div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMessage fontSize="24px" />} onClick={handleEmail}/>
            </div>
            <form onSubmit={SubmitEvent}>
                <div className={styles.formControl}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="8" />
                </div>
                <div className={styles.submit}>
                    <Button text="SUBMIT" />
                </div>
                <div>
                    {name + " " + email + " " + text}
                </div>
            </form>
        </div>
        <div className={styles.contactimg}>
            <img src='/images/Service.svg' alt='24/7 Service' />
        </div>
    </section>
  )
}

export default ContactForm
