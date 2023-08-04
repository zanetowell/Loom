import Image from 'next/image'
import styles from './page.module.css'
import Loom from 'public/loom.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>Welcome to a world of artistic expressions</h2>
        <h2 className={styles.desc}>A hub for creatives of all kinds to share their work with the world</h2>
      </div>
      <div className={styles.item}>
        <Image
          src={Loom}
          className={styles.img}
          priority={true}
          alt=''
          />
      </div>
    </div>
  )
}
