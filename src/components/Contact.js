import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center; 
  font-weight: normal;
  font-size: 3em;
  text-decoration: underline;
  color: #E0B0FF;
  margin: 0;
  padding: 1em;
`

const Contact = () => {
    const [userNameInput, setUserNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const handleChangeUserName = (event) => {
        setUserNameInput(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmailInput(event.target.value)
    }
    const handleChangeMessage = (event) => {
        setMessageInput(event.target.value)
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify({
        userNameInput, emailInput, messageInput
    }))
    }

    return (
        <>
            <Title>Contact</Title>
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input 
                    type="text" 
                    name="username" 
                    value={userNameInput} 
                    onChange={handleChangeUserName}
                />
                </label>
                <label>Email Address:
                <input 
                    type="email" 
                    name="email address" 
                    value={emailInput} 
                    onChange={handleChangeEmail}
                    />
                </label>
                <label>Message:
                <input 
                    type="text" 
                    name="message" 
                    value={messageInput} 
                    onChange={handleChangeMessage}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
  };

export default Contact;