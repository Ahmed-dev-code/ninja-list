import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>

    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <Link href='/ninjas' className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
    </>
  )
}
