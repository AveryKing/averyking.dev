import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';

export default function Home() {
    const [textState, setTextState] = useState('');
    useEffect(() => {
        setInterval(() => {
            const newVal = textState.length < 3 ? textState + '.' : '.';
            setTextState(newVal)
        },1000);
    },[textState,setTextState])
  return (
      <>
          <Head>
              <title>Avery King</title>
          </Head>
          <h1 className={styles.title}>
              Coming Soon <span className='dots'> {textState} </span>
          </h1>
      </>


  )
}
