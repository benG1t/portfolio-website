import React, { useEffect } from 'react'
import styled from 'styled-components'
import { skills } from '../utils/data'

const Skills = () => {
  return (
    <Wrapper className='section' id='skills'>
      <div className='section-title'>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>
      <div className='skills-center section-center'>
        {skills.map((skill) => {
          const { id, icon, text } = skill
          return (
            <article key={id} className='skill'>
              <div>
                <span>{icon}</span>
                <h4>{text}</h4>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .skill {
    width: 100%;
    height: 15rem;
    background: #343a40;
    display: grid;
    place-items: center;
    text-align: center;
    border-radius: var(--radius);
    span {
      font-size: 4rem;
      color: red;
      background: white;
      padding: 0.7rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      text-align: center;
    }
    h4 {
      padding-top: 1rem;
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--clr-primary-5);
    }
  }
  .skills-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
  }
`

export default Skills
