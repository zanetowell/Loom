
import React, { useContext } from 'react'
import styles from './page.module.css'
import { projectsList } from '@/utils/data.js' 
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  
  const res = await fetch('http://localhost:3000/api/events', {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Projects = async () => {
  const data = await getData() 
  // const { mode } = useContext(ThemeContext)
  // {mode === 'light' ? styles.item : styles.itemDM}
  return (
    <div className={styles.container}>
      <div className={styles.itemList}>
        {data.map(item=>(
        <Link href={`/events/${item._id}`} className={styles.item} key={item.id}>
            <div className={styles.imgContainer}>
            <Image 
              src={item.pic}
              fill={true}
              alt=''
              className={styles.img}
            />
            </div>
            <div className={styles.text}>
              <h2 className={styles.name}>{item.name}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <span className={styles.location}>{item.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects