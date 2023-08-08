import React from 'react'
import styles from './page.module.css'
import { projectsList } from '@/utils/data.js' 
import Image from 'next/image'

const Projects = () => {
  const data = projectsList 
  return (
    <div className={styles.container}>
      <div className={styles.itemList}>
        {data.map(item=>(
          <div className={styles.item} key={item.id}>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects