import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image />
        <h2>Welcome to Loom</h2>
        <p>A hub for creatives of all kinds to share their work with the world</p>
      </div>
      <div className={styles.item}>
        <Image />
      </div>
    </div>
  )
}
