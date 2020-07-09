import React, { Component } from 'react'

export class MessageInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:"",
            isTyping:false
        };

    }

    handleSubmit = (e)=> {
        e.preventDefault()
        this.sendMessage()
        this.setState({message:""})
    }

    sendMessage = () => {
        this.props.sendMessage(this.state.message)
    }

    sendTyping = () => {
        
    }


    render() {
        let {message} = this.state
        return (
            <div className="message-input">
                <form
                    onSubmit={this.handleSubmit}
                    className="message-form">
                    
                    <input
                        id= "message"
                        ref = {"messageinput"}
                        type ="text"
                        className = "form-control"
                        value = {message}
                        autoComplete={'off'}
                        placeholder= "Type something interesting"
                        onKeyUp = { e => {  e.keyCode !== 13 && this.props.sendTyping() }}
                        onChange = {
                            ({target}) => {
                                this.setState({message:target.value})
                            }
                        }
                    
                   />
                    <button
                     disabled = {message.length < 1}
                     type = "submit"
                     className = "send">
                         Send
                     </button>
                </form>
            </div>
        )
    }
}

export default MessageInput
