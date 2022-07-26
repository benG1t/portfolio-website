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
import body from '../images/body.JPG'
import face from '../images/face.JPG'

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
    url: 'https://www.linkedin.com/in/benjain-okundaye-15b048197',
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
    name: 'portfolio website',
    img: face,
    gitlink: '',
    weblink: '',
    gitlogo: <FaGithub />,
  },
  {
    id: 2,
    name: 'cocktail API project',
    img: body,
    gitlink: '',
    weblink: '',
    gitlogo: <FaGithub />,
  },
  {
    id: 1,
    name: 'E-commerce website',
    img: face,
    gitlink: '',
    weblink: '',
    gitlogo: <FaGithub />,
  },
]
