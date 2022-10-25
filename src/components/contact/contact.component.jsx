import React, { Component } from 'react';
import Button from '../button/button.component';
import './contact.styles.css';

class Contact extends Component {
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
                            // required='required'
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
            </div>
        )
    }
};

export default Contact;