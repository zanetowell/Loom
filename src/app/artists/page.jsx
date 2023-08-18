"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import { artistsList } from '@/utils/data.js' 
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

const Artists = () => {
  const data = artistsList
  const { mode } = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Artists</h1>
      {data.map(item=>(
        <Link href={`/artists/${item._id}`} className={styles.artist} key={item.id}>
          <div className={styles.info}>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.bio}>{item.bio}</p>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img}
              src={item.pic}
              fill={true}
              alt='Artist'
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Artists