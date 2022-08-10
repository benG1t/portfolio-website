import React from 'react'
import { portfolio } from '../utils/data'
import styled from 'styled-components'

const Portfolio = () => {
  return (
    <Wrapper className='section' id='portfolio'>
      <div className='section-title'>
        <h2>portfolio</h2>
        <div className='underline'></div>
      </div>
      <div className='portfolio-center section-center'>
        {portfolio.map((item) => {
          const { id, name, img, gitlink, weblink, gitlogo } = item
          return (
            <article key={id} className='project'>
              <img src={img} alt={name} />
              <div className='project-info'>
                <h4>{name}</h4>
                <div className='links'>
                  <a href={gitlink} target='_blank'>
                    <span>{gitlogo}</span>
                  </a>
                  <a href={weblink} target='_blank' className='btn'>
                    visit
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .project {
    background: var(--clr-grey-9);
    border-radius: var(--radius);
    transition: var(--transition);
    img {
      height: 15rem;
      object-fit: cover;
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
    }
  }
  .project:hover {
    background: var(--clr-grey-5);
  }
  .project-info {
    padding: 1rem;
    padding-bottom: 1.5rem;
    h4 {
      text-align: center;
      font-size: 1rem;
      color: var(--clr-grey-1);
    }
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.8rem;
      color: var(--clr-grey-1);
    }
    span:hover {
      color: var(--clr-primary-4);
    }
  }
  .portfolio-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
  }
`

export default Portfolio
