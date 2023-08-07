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
      {/* Text */}
      <div className={styles.textBlocks}>
        <div className={styles.textItem}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi non, accusantium, fuga aperiam molestiae laboriosam reprehenderit repudiandae ex iste nesciunt veritatis odio dolorem? Nemo beatae in sit, molestiae nostrum voluptates rem! Iusto itaque velit maxime voluptatum adipisci ut modi. Excepturi?</div>
        <div className={styles.textItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure tenetur facere. Nulla, illo, porro quos, pariatur itaque facilis dolorem velit voluptate maiores incidunt placeat? Reiciendis autem corporis porro blanditiis!
        <br /> <br />
        - Lorem ipsum dolor sit amet. <br />
        - Lorem ipsum dolor sit amet consectetur. <br />
        - Lorem ipsum dolor sit amet. <br />
        </div>
      </div>
    </div>
  )
}

export default About