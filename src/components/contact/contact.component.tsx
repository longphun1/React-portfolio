import emailjs from "@emailjs/browser";
import { useState } from "react";
import InputForm from "../Input-form/input-form.component";
import InputForm2 from "../input-form2/input-form2.component";
import TextArea from "../textArea/textArea.component";
import Button from "../button/button.component";
import MessageModal from "../modal/modal.component";
import "./contact.styles.css";

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  errors: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  messager?: string;
};

const Contact = () => {
  const [state, setState] = useState<ContactState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    messager: undefined,
  });

  const removeModal = () => {
    setState((prevState) => ({ ...prevState, messager: undefined }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateMail = () => {
    let errors: {
      name: string;
      email: string;
      subject: string;
      message: string;
    } = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let formIsValid = true;

    if (!state.name || state.name.length < 1) {
      errors.name = "Please enter your name";
      formIsValid = false;
    }

    if (!state.message || state.message.length < 1) {
      errors.message = "Enter a message";
      formIsValid = false;
    }

    if (!state.email || state.email.length < 1) {
      errors.email = "Please enter an email";
      formIsValid = false;
    }

    setState((prevState) => ({ ...prevState, errors: errors }));

    return formIsValid;
  };

  const sentMessage = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!validateMail()) {
      return;
    }

    var templateParams = {
      from_name: state.name + "(" + state.email + ")",
      to_name: "Long",
      subject: state.subject,
      message_html: state.message,
    };

    emailjs
      .send(
        "contact_service",
        "template_CcYeWkv5",
        templateParams,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setState((prevState) => ({
      ...prevState,
      name: "",
      email: "",
      subject: "",
      message: "",
      messager: prevState.name,
    }));
  };

  return (
    <div className="contact-container">
      <div id="contact"></div>
      <div className="contact">
        <h1 className="contact-title">Contact</h1>
        <form>
          <InputForm
            type="text"
            name="name"
            className="form"
            required="required"
            onChange={handleInputChange}
            value={state.name}
            error={state.errors.name}
          />

          <InputForm2
            type="email"
            name="email"
            className="form"
            required="required"
            onChange={handleInputChange}
            value={state.email}
            error={state.errors.email}
          />

          <TextArea
            name="message"
            id="message"
            required="required"
            className="form"
            rows={8}
            onChange={handleInputChange}
            value={state.message}
            error={state.errors.message}
          />

          <Button
            onClick={sentMessage}
            type="button"
            name="submit"
            className="submit"
          />
        </form>
      </div>
      <MessageModal messager={state.messager} removeModal={removeModal} />
    </div>
  );
};

export default Contact;
