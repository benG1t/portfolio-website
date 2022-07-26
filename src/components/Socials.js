import React from 'react'
import { social } from '../utils/data'
import styled from 'styled-components'

const Socials = () => {
  return (
    <Wrapper>
      {social.map((item) => {
        const { id, url, icon } = item
        return (
          <span key={id} className='icon'>
            <a href={url} target='_blank'>
              {icon}
            </a>
          </span>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    color: var(--clr-white);
    font-size: 1.8rem;
    display: inline-block;
    margin-right: 2rem;
    margin-top: 3.5rem;
  }
`

export default Socials
