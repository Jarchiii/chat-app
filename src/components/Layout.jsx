import React, { Component } from 'react'
import io from 'socket.io-client'
import {USER_CONNECTED, LOGOUT} from '../Events'
import LoginForm from './LoginForm'
const socketUrl = "http://192.168.1.14:3231"

export class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            socket: null,
            user:null
        };
    }

    componentWillMount(){
        this.initSocket()
    }

    initSocket = ()  => {
        const socket = io(socketUrl)
        socket.on('connect', () =>{
            console.log("connected");
        })
        this.setState({socket})
    }




setUser = (user) =>{
    const {socket} = this.state
    socket.emit(USER_CONNECTED, user);
    this.setState({user})
}

logout = () =>{
    const {socket} = this.state
    socket.emit(LOGOUT)
    this.setState({user:null})
}



  
    render() {
        const { title } = this.props
        const { socket } = this.state
        return (
            <div className="container">
                {title}
                <LoginForm socket={socket} setUser={this.setUser}/>
            </div>
        ) 
    }
}

export default Layout
