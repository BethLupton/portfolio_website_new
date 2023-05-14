import React, { useEffect } from 'react';
import styled from 'styled-components'
import beth_lupton from '../resources/beth_lupton.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const TitleContainer = styled.div`
    position: relative;
`

const Title = styled.h1`
  text-align: center; 
  font-weight: normal;
  font-size: 3em;
  text-decoration: underline;
  color: #E0B0FF;
  margin: 0;
  padding: 1em;
`

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 100px;
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

const LogoLinks = styled.div`
    width: 1000px; 
    margin: 0 auto
`
const LogoLinkLinkedIn = styled.p`
    width: 400px; 
    float: left;
`
const LogoLinkGit = styled.p`
    width: 400px; 
    float: right;
`

const About = () => {
    useEffect(() => {
        document.title = "About me | Beth Lupton"
    }, [])

    return (
    <>
        <TitleContainer>
            <Title>About Me</Title>
            <ProfilePic src={beth_lupton} alt="picture of beth lupton" />
        </TitleContainer>
        <ContentRegion>
            <InfoBox>
                <p>Hello my name is Beth Lupton. I am a budding software engineer- who is currently studying Professional Software Development at CodeClan.</p>
                <p>I am an avid baker who enjoys reading thrillers and going camping when the weather is nice!</p>
            </InfoBox>
        </ContentRegion>
        <LogoLinks>
                <LogoLinkLinkedIn><a href="https://www.linkedin.com/in/beth-lupton-5a0b96275/"><LinkedInIcon/></a></LogoLinkLinkedIn>
                <LogoLinkGit><a href="https://github.com/BethLupton"><GitHubIcon/></a></LogoLinkGit>
        </LogoLinks>

    </>
)};

export default About;