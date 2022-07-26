import React from 'react'
import styled from 'styled-components'
import body from '../images/body.JPG'

const About = () => {
  return (
    <Wrapper className='section' id='about'>
      <div className='about-center section-center'>
        <article className='img-container'>
          <img src={body} alt='' className='about-photo' />
        </article>
        <article className='about-info'>
          <h2>about</h2>
          <div className='underline'></div>
          <p>
            My name is Okundaye Benjamin. I am a frontend developer based in
            Nigeria, focused on creating frontend products with great user
            experiences.
          </p>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about-center {
    display: grid;
    gap: 2rem;
  }
  .about-photo {
    max-height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .underline {
    margin-left: 0;
  }
  p {
    color: var(--clr-white);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

export default About
