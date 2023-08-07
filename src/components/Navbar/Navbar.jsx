"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import BrandName from 'public/BrandName.png'
import { navLinks } from '@/utils/data.js'

const Navbar = () => {
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