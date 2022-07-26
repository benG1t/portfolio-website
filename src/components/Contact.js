import React from 'react'
import styled from 'styled-components'
import Socials from './Socials'

const Contact = () => {
  return (
    <Wrapper className='contact section' id='contact'>
      <div className='section-title'>
        <h2>contact me</h2>
        <div className='underline'></div>
      </div>
      <div className='contact-center section-center'>
        <div className='contact-info'>
          <p className='info'>
            Hello there, feel free to contact me at any time, I will get back to
            you as soon as posible and if it's urgent, my phone number would be
            better to react me.
          </p>
          <p className='email'>Email: okundayebenjamin@gmail.com</p>
          <Socials />
        </div>
        <form action='https://formspree.io/f/mbjwnzll' method='POST'>
          <input type='text' name='text' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='text' name='text' placeholder='Message' />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 85vh;
  background: var(--clr-grey-10);
  .email {
    margin-bottom: -1rem;
    font-weight: bold;
  }
  .contact-center {
    display: grid;
    gap: 2rem;
  }
  input {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    border-radius: var(--radius);
    padding: 0.5rem;
    width: 100%;
    border: none;
  }
  .btn {
    width: 100%;
    height: 3rem;
  }
  .contact-info {
    font-size: 1rem;
    p {
      color: var(--clr-grey-1);
    }
  }
  .section-title {
    h2 {
      color: var(--clr-grey-1);
    }
  }
  .icon {
    a {
      color: var(--clr-grey-1);
    }
  }
  @media (min-width: 786px) {
    .contact-center {
      grid-template-columns: 1fr 1fr;
    }
    .email {
      font-size: 1.1rem;
    }
  }
`
export default Contact
