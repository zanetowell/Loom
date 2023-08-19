"use client"

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './page.module.css'

const Login = () => {

  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading....</p>
  }

  if (session.status === 'authenticated') {
    router?.push("/users/login")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value
    
    signIn("credentials", { email, password })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className={styles.input} required/>
        <input type='password' placeholder='password' className={styles.input} required/>
        <button className={styles.login}>Login</button>
      </form>
        <Link href='/users/register' className={styles.register}>Register</Link>
      <div className={styles.divider}></div>
      <button onClick={()=>signIn("google")} className={styles.google}>Login with Google</button>
    </div>
  )
}

export default Login