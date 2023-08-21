
import React, { useContext } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  
  const res = await fetch('http://localhost:3000/api/artists', {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Artists = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Artists</h1>
      {data.map(item=>(
        <Link href={`/artists/${item._id}`} className={styles.artist} key={item._id}>
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