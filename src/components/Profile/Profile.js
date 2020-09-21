import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import P from '../Shared/P/P';
import pic from './rsz_profile.png';

const ProfileWrapper = styled.section`
  text-align: center;
  margin-top: 40px;
  min-height: 100%;
  padding: 10px 0;
  a {
    font-weight: bold;
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px white, 0 3px 8px 3px #ccc;
  margin: 20px 0;
`;

const NameWrapper = styled.div`
  margin-bottom: 20px;
  font-family: 'Alike', serif;
  h3 {
    margin: 10px auto;
    font-size: 1.1em;
    font-weight: 500;
  }
  h2,
  h3 {
    font-family: inherit;
  }
`;

const Name = styled.h2`
  font-size: 2.5em;
  display: inline-block;
  margin: 0;
  font-weight: 600;
`;

const Profile = () => (
  <ProfileWrapper>
    <h3>Hi there, I'm Peyash 👋</h3>

    <P>
    A Fullstack Developer and an NLP enthusiast living in Bangladesh. <br />  
    Currently I'm unemployed and looking for opportunities.
    </P>
    <ProfilePic src={pic} />
    <P>
      I design and implement web applications and services around web and cloud technologies. <br />
      
    </P>
    <P>
      You can  find me online on <a href="http://github.com/taufique74">Github </a>{' '}
      and <a href="http://twitter.com/TaufiquePeyash">Twitter 🐦</a>.
    </P>
    <P>
      In my spare time, I like to explore new technologies and delve into their documentations.
      <br />
    </P>
  </ProfileWrapper>
);

export default Profile;
