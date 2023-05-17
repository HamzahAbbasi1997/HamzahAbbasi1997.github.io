import Research1 from '../../images/research1.jpg';
import Research2 from '../../images/research2.jpg';
import Research3 from '../../images/research3.jpg';
import Research4 from '../../images/research4.jpg';
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
} from './ResearchElements';

const Research = () => {
  return (
    <div id='research'>
        <Title className='model-title'>Research</Title>
        <div className="divider"></div>
        <InfoRow className="members">
        {/* <LinkContainer  href='https://panweihit.github.io/' > */}
          <PeopleContainer>
            <Img width={200} height={200} src={Research1}/>
            <div className="description">
                <Heading>Research Article</Heading>
                <Heading2>Title</Heading2>
                <Subtitle>
                Research Research Research Research Research Research Research Research Research Research Research Research Research Research .
                </Subtitle>
            </div>
          </PeopleContainer>
          {/* </LinkContainer> */}
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Research2}/>
            <div className="description">
                <Heading>Research 2</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research . 
                </Subtitle>
            </div>
          </PeopleContainer>
        </InfoRow>
        <InfoRow className="members">
        {/* <LinkContainer  href='https://panweihit.github.io/' > */}
          <PeopleContainer>
            <Img width={200} height={200} src={Research3}/>
            <div className="description">
                <Heading>Research Article</Heading>
                <Heading2>Title</Heading2>
                <Subtitle>
                Research Research Research Research Research Research Research Research Research Research Research Research Research Research .
                </Subtitle>
            </div>
          </PeopleContainer>
          {/* </LinkContainer> */}
          <PeopleContainer className="member">
            <Img width={200} height={200} src={Research4}/>
            <div className="description">
                <Heading>Research 2</Heading>
                <Heading2>University of Manchester</Heading2>
                <Subtitle>
                Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research Research . 
                </Subtitle>
            </div>
          </PeopleContainer>
        </InfoRow>
    </div>
  )
}

export default Research