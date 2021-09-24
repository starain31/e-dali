import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Dali</title>
        <meta name="description" content="Take me, I am the drug; take me, I am hallucinogenic." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Intelligence without ambition is a bird without wings<br/>
            -- <a href="https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD">Salvador Dalí!</a>
        </h1>
      </main>
    </div>
  )
}
