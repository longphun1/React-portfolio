import React, { Component } from 'react';
import emailjs from '@emailjs/browser'
import Input from '../Input-form/input-form.component';
import Input2 from '../input-form2/input-form2.component';
import TextArea from '../textArea/textArea.component';
import Button from '../button/button.component';
import MessageModal from '../modal/modal.component';
import './contact.styles.css';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            messager: undefined
        }
    }

    removeModal = () => {
        this.setState(() => ({ messager: undefined }))
    }

    handleInputChange(event) {
        event.preventDefault()
        const target = event.target;
        const name = target.name;
        const value = target.value

        this.setState({ [name]: value });
    }

    validateMail() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name || this.state.name.length < 1) {
            errors.name = "Please enter your name";
            formIsValid = false;
        }

        if (!this.state.message || this.state.message.length < 1) {
            errors.message = "Enter a message";
            formIsValid = false;
        }

        if (!this.state.email || this.state.email.length < 1) {
            errors.email = "Please enter an email";
            formIsValid = false;
        }

        this.setState({
            errors: errors
        })

        return formIsValid;
    }

    sentMessage(event) {
        event.preventDefault()

        if (!this.validateMail()) {
            return;
        }

        var templateParams = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'Long',
            subject: this.state.subject,
            message_html: this.state.message,
        }

        emailjs.send('contact_service', 'template_CcYeWkv5', templateParams, 'user_J1BDkVHh8QTjNGT1n94LV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            messager: this.state.name,
        });
    };

    render() {
        return (
            <div className="contact-container">
                <div id="contact"></div>
                <div className="contact">
                    <h1 className="contact-title">Contact</h1>
                    <form
                        id={this.props.id}
                        className={this.props.className}
                        name={this.props.name}
                        method={this.props.method}
                        action={this.props.action}>

                        <Input
                            type='text'
                            name='name'
                            className="form"
                            required='required'
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.name}
                            error={this.state.errors.name}
                        />

                        <Input2
                            type='email'
                            name='email'
                            className="form"
                            required='required'
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.email}
                            error={this.state.errors.email}
                        />

                        <TextArea
                            name='message'
                            id='message'
                            required='required'
                            className="form"
                            rows='8'
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.message}
                            error={this.state.errors.message}
                        />

                        <Button
                            onClick={this.sentMessage.bind(this)}
                            type='button'
                            name='submit'
                            className='submit'
                            required='required'
                        />

                    </form>
                </div>
                <MessageModal 
                    messager={this.state.messager}
                    removeModal={this.removeModal}
                />
            </div>
        )
    }
};

export default Contact;