"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Shrikhand } from 'next/font/google'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { navLinks } from '@/utils/data.js'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'

// import { signIn, useSession } from 'next-auth/react'

export const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <p className={shrikhand.className}>Loom</p>
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
            {navLinks.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}   
        </div>

        {/* Hamburger Icon */}
        <div onClick={handleClick} className={styles.hamburger}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div className={!nav ? styles.mobilelinks : styles.showmobilelinks}>
          <DarkModeToggle />
            {navLinks.map(link=>(
                <Link key={link.id} href={link.url} onClick={handleClick}>
                    {link.title}
                </Link>
            ))}   
            <div className={styles.devlinks}>
              <Link href='https://github.com/zanetowell' target='_blank'><FaGithub/></Link>
              <Link href='https://www.linkedin.com/in/zane-towell/' target='_blank'><FaLinkedin/></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar