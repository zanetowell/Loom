"use client"

import React, { useContext } from 'react'
import styles from './page.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>{mode === 'light' ? '🌙' : '🔆'}</div>
    </div>
  )
}

export default DarkModeToggle