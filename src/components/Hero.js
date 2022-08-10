import React from 'react'
import styled from 'styled-components'
import Socials from './Socials'
import face from '../images/face.jpg'

const Hero = () => {
  return (
    <Wrapper className='section'>
      <div className='hero-center section-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          <h2>
            i'm <span>benjamin okundaye</span>
          </h2>
          <h4>frontend developer</h4>
          <button className='btn-hire'>hire me</button>
          <Socials />
        </article>
        <article className='img-container'>
          <img src={face} alt='' className='hero-photo' />
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 5rem);

  .img-container {
    display: none;
    height: 30rem;
  }
  .hero-center {
    display: grid;
    height: 100%;
  }
  .hero-info {
    align-self: center;
  }
  .underline {
    margin-left: 0;
  }
  span {
    color: var(--clr-primary-5);
  }
  h4 {
    margin: 1.4rem 0;
    font-size: 1rem;
  }
  .btn-hire {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    padding: 0.375rem 0.75rem;
    margin-top: 0.8rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    font-size: 0.875rem;
    border: 2px solid transparent;
    border-radius: var(--radius);
  }
  @media (min-width: 992px) {
    .hero-center {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .img-container {
      display: block;
    }
    .hero-photo {
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
    }
  }
`

export default Hero
