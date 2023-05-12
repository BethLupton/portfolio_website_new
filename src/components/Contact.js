import React from 'react';
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

const Contact = () => (
    <div>
        <Title>Contact</Title>
        <p>LinkedIn Link</p>
        <p>Email Address</p>
        <p>Contact form pending</p>
    </div>
);

export default Contact;