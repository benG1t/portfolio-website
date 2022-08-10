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
    name: 'movies DB',
    img: 'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fd25586981b1d331c3d8764239ff269f3%2Fd8d48a33%2FScreenShot2020-10-25at10.00.11PM.png%3Fts%3D1657480138%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dac76e7586b7427ab&w=1920&q=75',
    gitlink: 'https://github.com/benG1t/movie-db',
    weblink: 'https://myy-movie-db.netlify.app/',
    gitlogo: <FaGithub />,
  },
  {
    id: 3,
    name: 'cocktails',
    img: 'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F8b82e34918f1e8027187e923dd161a71%2Fe5915dda%2FScreenShot2020-10-13at7.21.10PM.png%3Fts%3D1657480138%26userId%3DusrQMwWEPx18KgLcP%26cs%3D6700d1d4c89f85e2&w=1920&q=75',
    gitlink: 'https://github.com/benG1t/cocktails',
    weblink: 'https://myy-cocktails.netlify.app/',
    gitlogo: <FaGithub />,
  },
  {
    id: 4,
    name: 'random person',
    img: 'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F5776066d2defe5df0af73d8ff123f91a%2F8018b41f%2FScreenShot2020-10-19at9.55.33PM.png%3Fts%3D1657480138%26userId%3DusrQMwWEPx18KgLcP%26cs%3D2f1ef99acf1e0fbe&w=1920&q=75',
    gitlink: 'https://github.com/benG1t/random-person',
    weblink: 'https://myy-random-person.netlify.app/',
    gitlogo: <FaGithub />,
  },
  {
    id: 5,
    name: 'grocery bud',
    img: 'https://react-projects.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fdl.airtable.com%2F.attachments%2F54f7223e43f5ea184e04f07a74220710%2F37a61d68%2FScreenShot2020-10-03at2.30.24PM.png%3Fts%3D1657480138%26userId%3DusrQMwWEPx18KgLcP%26cs%3D5155d22cac674d16?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F54f7223e43f5ea184e04f07a74220710%2F37a61d68%2FScreenShot2020-10-03at2.30.24PM.png%3Fts%3D1657480138%26userId%3DusrQMwWEPx18KgLcP%26cs%3D5155d22cac674d16&w=1920&q=75',
    gitlink: 'https://github.com/benG1t/grocery-bud',
    weblink: 'https://myy-grocery-bud.netlify.app/',
    gitlogo: <FaGithub />,
  },
  {
    id: 6,
    name: 'potfolio website',
    img: 'https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    gitlink: 'https://github.com/benG1t/portfolio-practice',
    weblink: 'https://myy-portfilio-site.netlify.app/',
    gitlogo: <FaGithub />,
  },
]
