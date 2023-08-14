"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { navLinks } from '@/utils/data.js'
// import { shrikhand } from '@/app/layout'
import { signIn, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <p>Loom</p>
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
            {navLinks.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
            <p className={styles.login} onClick={()=>signIn("google")}>Login</p>
        </div>
    </div>
  )
}

export default Navbar