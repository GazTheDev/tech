/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';


const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;


const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;


const Index = () => (
    <React.Fragment>
        <SEO />
        <Parallax pages={5}>
            <Divider speed={0.2} offset={0}>
                <UpDown>
                    <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
                    <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
                    <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
                </UpDown>
                <UpDownWide>
                    <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
                    <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
                    <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
                    <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
                    <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
                    <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
                </UpDownWide>
                <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
                <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
                <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
                <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
                <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
                <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
                <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
                <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
                <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
                <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
                <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
                <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
            </Divider>
            <Content speed={0.4} offset={0}>
                <Hero>
                    <BigTitle>
                        Hello, <br /> Welcome to My Ongoing Projects Page
          </BigTitle>
                    <Subtitle>Below are some of my current projects. I like to keep myself busy!. <a href="/">Home</a>


                    </Subtitle>
                </Hero>
            </Content>

            <DividerMiddle
                bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
                speed={-0.2}
                offset={1.1}
                factor={2}
            />
            <Content speed={0.4} offset={1.2} factor={2}>
                <Inner>
                    <Title>On going work:</Title>
                    <ProjectsWrapper>
                        <ProjectCard
                            title="Coggeshall United Football Club - Media Director"
                            link="https://www.coggeshallunitedfc.co.uk"
                            bg="linear-gradient(to right, #194376 0%, #1B1C1E 100%)"
                        >
                            My role at Coggeshall varies but mainly I'm the man behind the camera. I work with Andrew <a href="https://wwww.andrewdouglaswills.com">Website</a> On match days to bring
                            modern apporach to the running of the day. We conduct interviews with playing staff and fans and compile them into a "vlog". Our equiement is limited at this current point however we rock
                            a Nikon D3300 with several ways of mounting such as the shoulder rig and the static tripod, we make use of all of these on match days.

                            I also developed and maintain the clubs website on a ongoing basis.
                        </ProjectCard>
                        <ProjectCard
                            title="Andrew Douglas Wills - Website Developer"
                            link="https://www.andrewdouglaswills.co.uk"
                            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                        >
                            As stated on the homepage, I now maintain Andrew Douglas Wills website. On this site I post blogs and update the technical aspects of the website. The website is using the WordPress content management system.
                            The theme of the website is a custom theme from ThemeForest and the previous developer created a clean, consise codebase which is good to see!.

                        Most of the maintaience I carry out is deleting spam comments. This is a ongoing issue with several websites I maintain. When I try to install WorldForce it doesn't let me login to my own site.




            </ProjectCard>
                        <ProjectCard
                            title="Community Iron - Website Advisor  "
                            link="https://www.communityiron.co.uk"
                            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                        >
                            This project goes back several months but as of recently it's one of my flagship products. Community Iron for those now aware is the Community Project based in Witham, Essex.

                            They run several projects such as Walking Football and Badminton. When I started advising what to do with the website It became clear loads of the code on the WordPress install was customised.

                        It soon became clear this was the case. However, we have managed to work around certain issues and resolved code bugs. So far the website is a great addition to my arsenal and will contiunue to advise them on the website.

                        Also, shoutout to Mark Sansom for allowing to make use of the office space at Witham Town. Many thanks.

            </ProjectCard>

                        <ProjectCard
                            title=" The Memorabilia Shop UK"
                            link="https://www.thememorabiliashopuk.co.uk"
                            bg="linear-gradient(to right, #662D8C 0%, #00FFEE 100%)"
                        >
                            <br />

                            One which is still in development stage is a brand new e-comerece website which is selling sports memorabilia. I cannot say to much at this time but please watch this

            </ProjectCard>
                    </ProjectsWrapper>
                </Inner>
            </Content>


            <Divider>
                <UpDownWide>
                    <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
                    <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
                    <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
                    <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
                    <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
                    <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
                </UpDownWide>

            </Divider>

            <Divider speed={0.1} offset={3}>
                <UpDown>
                    <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
                    <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
                    <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
                    <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
                </UpDown>
                <UpDownWide>
                    <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
                    <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
                    <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
                    <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
                </UpDownWide>
                <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
                <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
                <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
                <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
                <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
            </Divider>


            <Content speed={0.4} offset={4}>
                <Inner>
                    <Title>Get in touch</Title>


                    <ContactText>

                        Say <a href="mailto:daviesg77@gmail.com">Hi</a> or find me on other platforms:{' '}
                        <a href="https://www.facebook.com/gareth.davies.gazza">Facebook</a> &{' '}
                        <a href="https://www.instagram.com/">Instagram</a>
                    </ContactText>
                </Inner>
                <Footer>
                    &copy; Created with love through Gatsby.{' '}
                    <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
            </Content>

        </Parallax>
    </React.Fragment>
);

export default Index;
