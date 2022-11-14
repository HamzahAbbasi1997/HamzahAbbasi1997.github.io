import Member1 from '../../images/Member1.jpg';
import Member2 from '../../images/Member2.jpg';
import Member3 from '../../images/Member3.png';
import Wei from '../../images/weipan.jpeg';
import { FaInstagram,  FaTwitter, FaLinkedin} from 'react-icons/fa'
import React from 'react';
import { 
  Heading,
  Heading2,
  Img,
  InfoRow,
  LinkContainer,
  PeopleContainer,
  SocialLogo,
  SocialMedia,
  Subtitle,
  Title
} from './PeopleElements';

const People = () => {
  return (
    <div id='model3'>
        <Title className='model-title'>Staff Members</Title>
        <div className="divider"></div>
        <InfoRow className="members">
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Member1}/>
            <div className="description">
                <Heading>Mauricio Alvarez</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Dr. Álvarez López received a degree in Electronics Engineering (B. Eng.) with Honours, from Universidad Nacional de Colombia in 2004, a master degree in Electrical Engineering (M. Eng.) from Universidad Tecnológica de Pereira, Colombia in 2006, and a Ph.D. degree in Computer Science from The University of Manchester, UK, in 2011.
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="//uk.linkedin.com/" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Member2}/>
            <div className="description">
                <Heading>Samuel Kaski</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Samuel Kaski is Professor of Artificial Intelligence at the University of Manchester and at Aalto University, Helsinki. In Manchester, he is Director of the Manchester. In Helsinki, he leads the Finnish Center for Artificial Intelligence Research FCAI and ELLIS Unit Helsinki. 
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="//uk.linkedin.com/" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
          <LinkContainer  href='https://panweihit.github.io/' >
          <PeopleContainer>
            <Img width={200} height={200} src={Wei}/>
            <div className="description">
                <Heading>Wei Pan</Heading>
                <Heading2>Associate Professor, CS@Manchester</Heading2>
                <Subtitle>
                After completing degrees in Harbin Institute of Technology and University of Science and Technology of China, Wei Pan gained industry experience in China and then in London whilst completing a PhD in Bioengineering at Imperial College London.
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="https://www.linkedin.com/in/wei-pan-6b558b17" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
          </LinkContainer>
        </InfoRow>
        <InfoRow className="members">
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Member1}/>
            <div className="description">
                <Heading>Mauricio Alvarez</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Dr. Álvarez López received a degree in Electronics Engineering (B. Eng.) with Honours, from Universidad Nacional de Colombia in 2004, a master degree in Electrical Engineering (M. Eng.) from Universidad Tecnológica de Pereira, Colombia in 2006, and a Ph.D. degree in Computer Science from The University of Manchester, UK, in 2011.
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="//uk.linkedin.com/" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Member2}/>
            <div className="description">
                <Heading>Samuel Kaski</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Samuel Kaski is Professor of Artificial Intelligence at the University of Manchester and at Aalto University, Helsinki. In Manchester, he is Director of the Manchester. In Helsinki, he leads the Finnish Center for Artificial Intelligence Research FCAI and ELLIS Unit Helsinki. 
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="//uk.linkedin.com/" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Member3}/>
            <div className="description">
                <Heading>Wei Pan</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                After completing degrees in Harbin Institute of Technology and University of Science and Technology of China, Wei Pan gained industry experience in China and then in London whilst completing a PhD in Bioengineering at Imperial College London.
                </Subtitle>
                <SocialMedia>
                  <SocialLogo href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialLogo>
                  <SocialLogo href="//www.twitter.com" target="_blank" aria-label="Instagram">
                  <FaTwitter />
                  </SocialLogo>
                  <SocialLogo href="//uk.linkedin.com/" target="_blank" aria-label="Instagram">
                  <FaLinkedin />
                  </SocialLogo>
                </SocialMedia>
            </div>
          </PeopleContainer>
        </InfoRow>
    </div>
  )
}

export default People