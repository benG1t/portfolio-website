import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaHtml5,
  FaReact,
} from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { TbBrandJavascript } from 'react-icons/tb'
import homeimg from '../images/home-img.jpeg'
import moviesdb from '../images/moviesdb.jpg'
import cocktailsdb from '../images/cocktailsdb.jpg'
import random from '../images/random.jpg'
import grocerybud from '../images/grocerybud.jpg'
import potfolio from '../images/potfolio.jpg'
import jobster from '../images/jobster.png'

export const links = [
  {
    id: 1,
    url: '/about',
    text: 'about',
  },
  {
    id: 2,
    url: '/portfolio',
    text: 'portfolio',
  },
  {
    id: 3,
    url: '/skills',
    text: 'skills',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://github.com/benG1t',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/benjamin-okundaye-15b048197/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://api.whatsapp.com/send?phone=2348169965079',
    icon: <FaWhatsapp />,
  },
]

export const skills = [
  {
    id: 1,
    text: 'html5',
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    text: 'css3',
    icon: <IoLogoCss3 />,
  },
  {
    id: 3,
    text: 'javascript',
    icon: <TbBrandJavascript />,
  },
  {
    id: 4,
    text: ' react',
    icon: <FaReact />,
  },
]

export const portfolio = [
  {
    id: 1,
    name: 'E-commerce store',
    img: homeimg,
    gitlink: 'https://github.com/benG1t/furniture-store',
    weblink: 'https://myy-furniture-store.netlify.app/',
    gitlogo: <FaGithub />,
  },
  {
    id: 2,
    name: 'Job tracking app',
    img: jobster,
    gitlink: 'https://github.com/benG1t/job-traking-app',
    weblink: 'https://job-traking-app.onrender.com',
    gitlogo: <FaGithub />,
  },
  {
    id: 3,
    name: 'movies DB',
    img: moviesdb,
    gitlink: 'https://github.com/benG1t/movie-db',
    weblink: 'https://myy-movie-db.netlify.app/',
    gitlogo: <FaGithub />,
  },
  // {
  //   id: 3,
  //   name: 'cocktails',
  //   img: cocktailsdb,
  //   gitlink: 'https://github.com/benG1t/cocktails',
  //   weblink: 'https://myy-cocktails.netlify.app/',
  //   gitlogo: <FaGithub />,
  // },
  // {
  //   id: 4,
  //   name: 'random person',
  //   img: random,
  //   gitlink: 'https://github.com/benG1t/random-person',
  //   weblink: 'https://myy-random-person.netlify.app/',
  //   gitlogo: <FaGithub />,
  // },
  // {
  //   id: 5,
  //   name: 'grocery bud',
  //   img: grocerybud,
  //   gitlink: 'https://github.com/benG1t/grocery-bud',
  //   weblink: 'https://myy-grocery-bud.netlify.app/',
  //   gitlogo: <FaGithub />,
  // },
  // {
  //   id: 6,
  //   name: 'potfolio website',
  //   img: potfolio,
  //   gitlink: 'https://github.com/benG1t/portfolio-practice',
  //   weblink: 'https://myy-portfilio-site.netlify.app/',
  //   gitlogo: <FaGithub />,
  // },
]
