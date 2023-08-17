import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'
import Button from '@/components/Button/Button'
import Link from 'next/link'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, {
      cache: "no-store",
    })
  
    if (!res) {
      notFound()
    }
  
    return res.json()
  }

const EventPage = async ({ params }) => {
    const data = await getData(params.id)
  return (
  <div className={styles.container}>
    <Link href='/events' className={styles.back}>
      Back
    </Link>
      <div className={styles.imgContainer}>
        <Image 
            src={data.pic}
            className={styles.img}
            fill={true}
            alt='banner'
        />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h1 className={styles.title}>{data.name}</h1>
          <Button text="Sign Up" url='#'/>
        </div>
          <span className={styles.location}>{data.location}</span>
        <div>
          <p className={styles.content}>{data.content}</p>
        </div>
      </div>
  </div>
  )
}

export default EventPage