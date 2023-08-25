import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'
import Button from '@/components/Button/Button'
import Link from 'next/link'

async function getData(id) {
    const res = await fetch(`https://loom-nine.vercel.app/api/artists/${id}`, {
      cache: "no-store",
    })
  
    if (!res) {
      notFound()
    }
  
    return res.json()
  }

const ArtistPage = async ({ params }) => {
    const data = await getData(params.id)
  return (
  <div className={styles.container}>
    <Link href='/artists' className={styles.back}>
    Back
    </Link>
      <div className={styles.artist}>
        <div className={styles.info}>
          <h2 className={styles.name}>{data.name}</h2>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            src={data.pic}
            fill={true}
            className={styles.img}
            alt='artist'
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.bio}>{data.bio}</p>
      </div>
  </div>
  )
}

export default ArtistPage