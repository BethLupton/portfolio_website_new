import React, { useEffect } from 'react';
import styled from 'styled-components'
import under_construction from '../resources/under_construction.png'

const Title = styled.h1`
  text-align: center; 
  font-weight: normal;
  font-size: 3em;
  text-decoration: underline;
  color: #E0B0FF;
  margin: 0;
  padding: 1em;
`

const Projects = () => {
    useEffect(()=> {
        document.title = "Projects | Pending"
    }, [])

    return (
    <div>
        <Title>Projects</Title>
        <img src={under_construction} alt="this web page is under construction" />
    </div>
)};

export default Projects;