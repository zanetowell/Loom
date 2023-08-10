

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import BrandName from 'public/BrandName.png'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { navLinks } from '@/utils/data.js'
import { shrikhand } from '@/app/layout'

const Navbar = () => {
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
            <p className={styles.login}>Login</p>
        </div>
    </div>
  )
}

export default Navbar