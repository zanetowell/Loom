import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/5682325/pexels-photo-5682325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>A Hub of Creativity</h1>
          <h2 className={styles.imgDesc}>Home to many of todays up and coming artists.</h2>
        </div>
      </div>
      
      <div className={styles.textBlocks}>
        <div className={styles.textItem}>Loom was born out of a simple yet profound idea: to weave together a virtual tapestry where artists and creatives could showcase their work and cultivate meaningful connections. In an increasingly digital world, we recognized the need for a space that transcends boundaries and celebrates the diverse forms of artistic expression. With a deep-rooted passion for the arts, we set out to create a haven where imagination knows no limits.</div>
        <div className={styles.textItem}>Whether you're a painter, a poet, a musician, a filmmaker, or any kind of creative soul, Loom invites you to be a part of our vibrant tapestry. Join us in celebrating the magic of artistic expression and weaving together stories that inspire, connect, and transform. 
        <br /> <br />
        - Showcase Your Art. <br />
        - Connect and Collaborate. <br />
        - Inspiring Events. <br />
        </div>
      </div>
    </div>
  )
}

export default About