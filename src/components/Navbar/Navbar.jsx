"use client"

import React from 'react'
import Link from 'next/link'
import { Shrikhand } from 'next/font/google'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { navLinks } from '@/utils/data.js'
// import { signIn, useSession } from 'next-auth/react'

export const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const Navbar = () => {
  // const session = useSession()
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
    </div>
  )
}

export default Navbar