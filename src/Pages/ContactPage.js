import React, { useRef } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "emailjs-com";
import Button from '@mui/material/Button';
function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={sendEmail} ref={form}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-field f-button">
                <Button variant="outlined" type="submit" value="Send">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+20 114 664 5267"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"mohamed.n.a.gaber@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Nasr City, Cairo, Egypt"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`

  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
