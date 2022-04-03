import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';

export default function Home() {
    const [textState, setTextState] = useState('');
    useEffect(() => {

    },textState,setTextState)
  return (

      <>
          <Head>
              <title>Avery King</title>
          </Head>
          <h1 className={styles.title}>
              Coming Soon...
          </h1>

      </>


  )
}
