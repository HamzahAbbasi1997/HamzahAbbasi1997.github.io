import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { ButtonLink } from '../ButtonLink';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

const HeroSection = () => {
  
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/webm' />
        </HeroBg>
        <HeroContent>
          <HeroH1>The foundations of world-leading artificial intelligence.</HeroH1>
          <HeroP>
          A new investment into AI education, innovation and industrial collaboration.
          </HeroP>
          <HeroBtnWrapper>
            <ButtonLink to="/about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            >Learn More {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonLink>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection