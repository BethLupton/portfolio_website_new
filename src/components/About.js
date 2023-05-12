import React, { useEffect } from 'react';
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
const InfoBox = styled.div`
    padding: 15px;
    max-width: 500px;
    box-shadow: 10px 10px 5px 12px #E0B0FF;
`

const ContentRegion = styled.div`
    display: flex;
    justify-content: center;
`

const About = () => {
    useEffect(() => {
        document.title = "About me | Beth Lupton"
    }, [])

    return (
    <>
        <div>
            <Title>About Me</Title>
        </div>
        <ContentRegion>
            <InfoBox>
                <p>Hello my name is Beth Lupton. I am a budding software engineer- who is currently studying Professional Software Development at CodeClan.</p>
                <p>I am an avid baker who enjoys reading thrillers and going camping when the weather is nice!</p>
            </InfoBox>
        </ContentRegion>
    </>
)};

export default About;