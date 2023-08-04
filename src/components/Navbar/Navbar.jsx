"use client"

import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import BrandName from 'public/BrandName.png'

const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Image 
            src={BrandName}
            alt=''
            className={styles.logo}
          />
        </Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar