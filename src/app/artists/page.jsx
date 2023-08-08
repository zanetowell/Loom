import React from 'react'
import styles from './page.module.css'
import { artistsList } from '@/utils/data.js' 
import Image from 'next/image'

const Artists = () => {
  const data = artistsList
  return (
    <div className={styles.container}>
      {data.map(item=>(
        <div className={styles.artist} key={item.id}>
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
        </div>
      ))}
    </div>
  )
}

export default Artists