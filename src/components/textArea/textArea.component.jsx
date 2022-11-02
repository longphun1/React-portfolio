import React, { Component } from 'react';

class TextArea extends Component {
    render () {
        return (
            <div className='form-group'>
                <label class="form-label">Message: <span className='error'>{this.props.error}</span></label>
                <textarea name={this.props.name}
                    id={this.props.id}
                    required={this.props.required}
                    className={this.props.className}
                    rows={this.props.row}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    placeholder="Message Here! (required)"
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}

export default TextArea