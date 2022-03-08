import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Art from "../../assets/collabo.png";
import "./Contact.scss";

import Wrapper from "../../container/Wrapper";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hudxwwl",
        "template_9e15z5a",
        form.current,
        "user_3V2hD8k43lyi0qVmsxaxz"
      )
      .then(
        (result) => {
          console.log("Email sent");
        },
        (error) => {
          console.log("There was an error");
        }
      );

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <motion.div
      className="contact__container"
      id="contact"
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact__collaboration-image">
        <img src={Art} alt="" width="500px" />
      </div>

      <div className="contact__form-container">
        <h2>COLLABORATION</h2>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="from_name"
              id="from_name"
              ref={nameRef}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              ref={messageRef}
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div>
            <button type="submit" className="contact__send-btn">
              Leave a message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Wrapper(Contact, "contact");
