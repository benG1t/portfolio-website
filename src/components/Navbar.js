import React, { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { links } from '../utils/data'
import { Link } from 'react-scroll'
import frontend from '../images/frontend.pdf'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`
  //     linksContainerRef.current.style.borderBottom = `1px solid white`
  //   } else {
  //     linksContainerRef.current.style.height = '0px'
  //     linksContainerRef.current.style.borderBottom = `none`
  //   }
  // }, [showLinks])

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <span>B.O</span>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, text } = link
              return (
                <li key={id}>
                  <Link
                    activeClass='active'
                    to={text}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='cv-container'>
          <a href={frontend} download>
            download CV
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  width: 90vw;
  margin: 0 auto;
  height: 5rem;
  padding: 2rem 0;
  max-width: var(--max-width);
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    a {
      color: var(--clr-white);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      display: block;
      margin-top: 2rem;
      font-size: 1.3rem;
      transition: var(--transition);
      cursor: pointer;
    }
    a:hover {
      background: var(--clr-primary-4);
      padding-left: 1rem;
      border-radius: var(--radius);
    }
  }

  .cv-container {
    display: none;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 2rem;
      font-weight: 700;
    }
    .nav-toggle {
      font-size: 2rem;
      border: transparent;
      background-color: transparent;
      color: var(--clr-primary-5);
      padding-top: 0.5rem;
      cursor: pointer;
      transition: var(--transition);
    }
    .nav-toggle:hover {
      transform: rotate(90deg);
    }
  }
  @media (min-width: 800px) {
    .nav-header {
      .nav-toggle {
        display: none;
      }
    }
    .links-container {
      display: block;
      border-bottom: none !important;
      height: auto !important;
      a {
        margin: 0 1rem;
        font-size: 1.2rem;
        transition: var(--transition);
      }
      a:hover {
        color: var(--clr-primary-5);
        background: transparent;
        padding-left: 0;
      }
    }
    .cv-container {
      display: block;
      a {
        color: var(--clr-primary-5);
        font-size: 1rem;
        font-weight: bold;
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 4px solid var(--clr-primary-6);
        border-radius: var(--radius);
        text-transform: capitalize;
        cursor: pointer;
      }
      a:hover {
        color: var(--clr-white);
        background: var(--clr-primary-2);
      }
    }

    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default Navbar
