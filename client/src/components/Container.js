import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChat } from '../context/ChatContext'

import {init, subscribeChat, subscribeInitialMessages} from '../socketApi'

function Container() {
    const {setMessages} = useChat()

    useEffect(() => {
        init();
        // i don't need old messages. if you need old messages else delete comment slash
        //subscribeInitialMessages((messages)=> setMessages(messages))

        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }] )
        });
    }, [])

    return (
        <div className="App">
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container
